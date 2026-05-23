import {FaGithub} from "react-icons/fa";
import {Send} from "lucide-react";

export function Socials(){
    return (
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
                href="https://t.me/chessmankir"
                target="_blank"
            >
                <Send size={18} />
            </a>
        </div>
    )
}