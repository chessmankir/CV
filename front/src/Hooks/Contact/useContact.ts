"use client";
import {useState} from "react";
import {useContactStore} from "@/src/Store/ContactStore";

export function useContact() {
    const [aiLoading, setAiLoading] = useState(false);
    const name = useContactStore((state) => state.name);
    const email = useContactStore((state) => state.email);
    const comment = useContactStore((state) => state.comment);
    const phone = useContactStore((state) => state.phone);

    const handleAiAdapt = async () => {
        console.log(comment);
        try {
            setAiLoading(true);
          //  await new Promise((resolve) => setTimeout(resolve, 1200));
        } catch (error) {
            console.log(error);
        } finally {
            setAiLoading(false);
        }
    };

    const handleSendEmail =  (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(comment);
        console.log(phone);

        const backend = process.env.NEXT_PUBLIC_BACKEND_API;
        console.log(backend);
        try{

        }
        catch (e) {
            console.log(e);
        }
    }

    return { aiLoading, handleAiAdapt, handleSendEmail};
}