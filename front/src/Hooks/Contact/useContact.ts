"use client";

import { useState } from "react";
import { useContactStore } from "@/src/Store/ContactStore";
import { toast } from "sonner";

const COMMENT_LIMIT = 1000;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phoneRegex = /^[+]?[\d\s\-()]{7,20}$/;

export function useContact() {
    const [aiLoading, setAiLoading] = useState(false);

    const name = useContactStore((state) => state.name);
    const email = useContactStore((state) => state.email);
    const comment = useContactStore((state) => state.comment);
    const setComment = useContactStore((state) => state.setComment);
    const phone = useContactStore((state) => state.phone);
    const [sendLoading, setSendLoading] = useState(false);

    const validateContactForm = () => {
        if (!name.trim()) {
            toast.error("Введите имя");
            return false;
        }

        if (!email.trim() || !emailRegex.test(email)) {
            toast.error("Введите корректный email");
            return false;
        }

        if (!phone.trim() || !phoneRegex.test(phone)) {
            toast.error("Введите корректный телефон");
            return false;
        }

        if (!comment.trim()) {
            toast.error("Введите комментарий");
            return false;
        }

        if (comment.length > COMMENT_LIMIT) {
            toast.error("Комментарий слишком длинный", {
                description: `Максимум ${COMMENT_LIMIT} символов`,
            });
            return false;
        }

        return true;
    };

    const handleAiAdapt = async () => {
        if (!comment.trim()) {
            toast.error("Введите комментарий для AI");
            return;
        }

        if (comment.length > COMMENT_LIMIT) {
            toast.error("Комментарий слишком длинный");
            return;
        }

        try {
            setAiLoading(true);

            const backend = process.env.NEXT_PUBLIC_BACKEND_API;

            const response = await fetch(`${backend}/api/ai/comment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ comment }),
            });

            const data = await response.json();

            if (data.ok) {
                toast.success("Выполнено успешно", {
                    description: "Сообщение обновлено",
                });

                setComment(data.comment.trim());
            } else {
                toast.error("Ошибка AI", {
                    description: data.message,
                });
            }
        } catch {
            toast.error("Ошибка AI", {
                description: "Не удалось адаптировать комментарий",
            });
        } finally {
            setAiLoading(false);
        }
    };

    const handleSendEmail = async () => {
        if (!validateContactForm()) return;

        const backend = process.env.NEXT_PUBLIC_BACKEND_API;

        try {
            setSendLoading(true);

            const response = await fetch(`${backend}/api/mail`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    comment,
                }),
            });

            const data = await response.json();

            if (data.ok) {
                toast.success("Сообщение отправлено", {
                    description: "Владелец сайта получил письмо",
                });
            } else {
                toast.error("Ошибка отправки", {
                    description: data.message,
                });
            }
        } catch {
            toast.error("Ошибка отправки", {
                description: "Сервер временно недоступен",
            });
        } finally {
            setSendLoading(false);
        }
    };

    return {
        aiLoading,
        handleAiAdapt,
        handleSendEmail,
        sendLoading,
        COMMENT_LIMIT
    };
}