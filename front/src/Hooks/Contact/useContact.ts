"use client";

import { useState } from "react";
import type { SyntheticEvent } from "react";
import { useContactStore } from "@/src/Store/ContactStore";
import {toast} from "sonner";

export function useContact() {
    const [aiLoading, setAiLoading] = useState(false);

    const name = useContactStore((state) => state.name);
    const email = useContactStore((state) => state.email);
    const comment = useContactStore((state) => state.comment);
    const setComment = useContactStore((state) => state.setComment);
    const phone = useContactStore((state) => state.phone);

    const handleAiAdapt = async () => {
        try {
            setAiLoading(true);
            const backend = String(process.env.NEXT_PUBLIC_BACKEND_API);
            const response = await fetch(`${backend}/api/ai/comment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    comment: comment,
                })
            });
            const data = await response.json();
            if(data.ok){
                toast.success("Выполенно успешно", {
                    description: "Сообщение обновлено"
                });
                setComment(data.comment.trim());
            }
            else{
                toast.error("Ошибка отправки", {
                    description: data.message
                });
            }
        } finally {
            setAiLoading(false);
        }
    };

    const handleSendEmail = async () => {
        const backend = process.env.NEXT_PUBLIC_BACKEND_API;
        try {
            const response = await fetch(`${backend}/api/mail`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: phone,
                    comment: comment,
                })
            });
            const data = await response.json();
            if(data.ok){
                toast.success("Сообщение отправлено", {
                    description: "Владелец сайта получил письмо"
                });
            }
            else{
                toast.error("Ошибка отправки", {
                    description: data.message
                });
            }
        }
        catch (error) {

        }
    };

    return { aiLoading, handleAiAdapt, handleSendEmail };
}