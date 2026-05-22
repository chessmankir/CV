import Image from "next/image";
import {FaGithub} from "react-icons/fa";
import {Send} from "lucide-react";

export function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="profile-row">
                <div className="avatar">
                    <Image src="/me.png" alt="Кир" width={150} height={150} />
                </div>

                <div className="profile-main">
                    <h1>Кир</h1>
                    <p className="role">Frontend / Fullstack Developer</p>
                </div>
            </div>

           {/* <button className="contact-toggle">Show Contacts⌄</button>*/}

            <div className="contact-info">
                <div className="line" />

                {/* <div className="contact-card">
                        <div className="contact-icon">
                            <Mail size={18} />
                        </div>

                        <div className="contact-text">
                            <span>Email</span>
                            <strong>skornkir@gmail.com</strong>
                        </div>
                    </div>*/}

                <div className="socials">
                    <a
                        className="social"
                        href="https://github.com/chessmankir"
                        target="_blank"
                    >
                        <FaGithub  size={18} />
                    </a>

                    <a
                        className="social"
                        href="https://t.me/yourtelegram"
                        target="_blank"
                    >
                        <Send size={18} />
                    </a>
                </div>
            </div>
        </aside>

    )
}