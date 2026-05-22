import "@/src/scss/home.scss";
import Image from "next/image";
import {
    Globe,
    ServerCog,
    Smartphone,
    Sparkles,
} from "lucide-react";
import "@/src/components/Sidebar/Sidebar"
import { FaGithub } from "react-icons/fa";
import {Sidebar} from "@/src/components/Sidebar/Sidebar";

const services = [
    {
        title: "Сайты",
        text: "React, Next.js, TypeScript, адаптивная верстка.",
        icon: Globe,
    },
    {
        title: "Веб-сервисы",
        text: "Node.js, Express, API, PostgreSQL, Prisma.",
        icon: ServerCog,
    },
    {
        title: "Мобильные приложения",
        text: "React Native, аккуратные интерфейсы и формы.",
        icon: Smartphone,
    },
    {
        title: "AI Tools",
        text: "Использую AI для кода, идей, проверки и улучшения проекта.",
        icon: Sparkles,
    },
];

const stack = [
    {
        title: "Frontend",
        items: [
            { icon: "/stack/nextjs.svg", name: "Next.js" },
            { icon: "/stack/react.svg", name: "React" },
            { icon: "/stack/react_native.svg", name: "React Native" },
            { icon: "/stack/ts.svg", name: "TypeScript" },
            { icon: "/stack/js.svg", name: "JavaScript" },
            { icon: "/stack/sass.png", name: "Sass" },
        ],
    },
    {
        title: "Backend",
        items: [
            { icon: "/stack/nodejs.png", name: "Node.js" },
            { icon: "/stack/express.png", name: "Express" },
            { icon: "/stack/prisma.png", name: "Prisma" },
        ],
    },
    {
        title: "Database",
        items: [
            { icon: "/stack/mysql.png", name: "MySQL" },
            { icon: "/stack/postgresql.png", name: "PostgreSQL" },
        ],
    },
    {
        title: "Tools",
        items: [
            { icon: "/stack/git.png", name: "Git" },
            { icon: "/stack/docker.png", name: "Docker" },
            { icon: "/stack/socketio.png", name: "Socket.IO" },
        ],
    },
];

export default function AboutPage() {
    return (
        <div className="home-page">
            <section id="about" className="block">
                <h2>О себе</h2>
                <div className="accent" />

                <p>
                    Я — Кир. Профессиональный веб-разработчик. С детства я занимался
                    шахматами, из-за чего родилась моя любовь к построению алгоритмов и
                    упорядоченных систем.
                </p>

                <p>
                    Моя цель — найти команду, которая направляет свою энергию на
                    создание IT-технологий и качественного цифрового будущего. Всегда
                    нахожусь в процессе самосовершенствования технических и личных
                    навыков.
                </p>

                <p>
                    Имею опыт разработки Web-сервисов, включая интеграцию API,
                    сторонних библиотек и оптимизацию проектов.
                </p>
            </section>
            <section className="block">
                <h2>Что я делаю</h2>

                <div className="cards">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <article className="card" key={service.title}>
                                <div className="icon">
                                    <Icon size={28} strokeWidth={2.2} />
                                </div>

                                <div>
                                    <h3>{service.title}</h3>
                                    <p>{service.text}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>
            <section id="stack" className="block tech-block">
                <h2>Стек технологий</h2>
                <div className="accent" />

                <div className="tech-list">
                    {stack.map((group) => (
                        <div className="tech-group" key={group.title}>
                            <h3>{group.title}</h3>

                            <div className="tech-grid">
                                {group.items.map((item) => (
                                    <div className="tech-card" key={item.name}>
                                        <div className="tech-icon">
                                            <Image
                                                src={item.icon}
                                                alt={item.name}
                                                width={42}
                                                height={42}
                                            />
                                        </div>

                                        <span className="tech-name">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}