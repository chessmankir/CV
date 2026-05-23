import {create} from "zustand";

type ContactStore = {
    name: string;
    email: string;
    comment: string;
    phone: string;

    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setComment: (comment: string) => void;
    setPhone: (phone: string) => void;
}

export const useContactStore = create<ContactStore>( (set) => ({
    name: "",
    email: "",
    comment: "",
    phone: "",

    setName: (value: string) => set({name:value}),
    setPhone: (value: string) => set({phone:value}),
    setEmail: (value: string) => set({email:value}),
    setComment: (value: string) => set({comment:value}),
}));