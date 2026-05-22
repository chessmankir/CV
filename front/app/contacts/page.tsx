"use client";
import "@/src/scss/contact.scss";
import { Send, Sparkles } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [comment, setComment] = useState("");
    const [aiLoading, setAiLoading] = useState(false);

    const handleAiAdapt = async () => {
        try {
            setAiLoading(true);

            // TODO: backend request
            // const response = await fetch("/api/ai/adapt", {
            //   method: "POST",
            //   headers: {
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify({
            //     comment,
            //   }),
            // });

            // const data = await response.json();
            // setComment(data.result);

            await new Promise((resolve) => setTimeout(resolve, 1200));
        } catch (error) {
            console.log(error);
        } finally {
            setAiLoading(false);
        }
    };

    return (
        <section className="block contact-page">
            <h2>Контакты</h2>
            <div className="accent" />

            <form className="contact-form">
                <div className="form-row">
                    <input type="text" placeholder="Ваше имя" />
                    <input type="email" placeholder="Email" />
                </div>

                <input type="tel" placeholder="Телефон" />

                <div className="textarea-wrapper">
          <textarea
              placeholder="Комментарий"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
          />

                    <button
                        type="button"
                        className="ai-button"
                        onClick={handleAiAdapt}
                        disabled={aiLoading || !comment.trim()}
                    >
                        <Sparkles size={14} />

                        {aiLoading
                            ? "AI адаптирует..."
                            : "Адаптировать комментарий через AI"}
                    </button>
                </div>

                <button type="submit" className="submit-btn">
                    <Send size={18} />
                    Отправить
                </button>
            </form>
        </section>
    );
}