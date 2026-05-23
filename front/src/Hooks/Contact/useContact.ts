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
            console.log(data);
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
       /* console.log("submit без перезагрузки");
        console.log(name, email, comment, phone);

        const backend = process.env.NEXT_PUBLIC_BACKEND_API;
        console.log(backend);
        try {
            console.log()
        }
        catch (error) {

        }*/
    };

    return { aiLoading, handleAiAdapt, handleSendEmail };
}