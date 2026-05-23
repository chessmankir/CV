"use client";

import { Send, Sparkles, LoaderCircle } from "lucide-react";
import { useContact } from "@/src/Hooks/Contact/useContact";
import { useContactStore } from "@/src/Store/ContactStore";

export function ContactForm() {
    const name = useContactStore((state) => state.name);
    const setName = useContactStore((state) => state.setName);

    const email = useContactStore((state) => state.email);
    const setEmail = useContactStore((state) => state.setEmail);

    const comment = useContactStore((state) => state.comment);
    const setComment = useContactStore((state) => state.setComment);

    const phone = useContactStore((state) => state.phone);
    const setPhone = useContactStore((state) => state.setPhone);

    const { aiLoading, handleAiAdapt, handleSendEmail, sendLoading, COMMENT_LIMIT } = useContact();

    return (
        <form className="contact-form">
            <div className="form-row">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя"
                />

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
            </div>

            <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="Телефон"
            />

            <div className="textarea-wrapper">
                <textarea
                    placeholder="Комментарий"
                    value={comment}
                    maxLength={COMMENT_LIMIT}
                    onChange={(e) => setComment(e.target.value)}
                />

               {/* <div className="comment-counter">
                    {comment.length}/{COMMENT_LIMIT}
                </div>*/}

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

            <button
                type="button"
                className="submit-btn"
                onClick={handleSendEmail}
                disabled={sendLoading}
            >
                {sendLoading ? (
                    <>
                        <LoaderCircle
                            size={18}
                            className="spinner"
                        />

                        Отправка...
                    </>
                ) : (
                    <>
                        <Send size={18} />
                        Отправить
                    </>
                )}
            </button>
        </form>
    );
}