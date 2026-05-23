import {useContact} from "@/src/Hooks/Contact/useContact";
import {Sparkles, Send} from "lucide-react";
import {ContactForm} from "@/src/components/Contacts/ContactForm";

export function ContactPage() {
    return (
        <section className="block contact-page">
            <h2>Контакты</h2>
            <div className="accent"/>
            <ContactForm />
        </section>
    );
}