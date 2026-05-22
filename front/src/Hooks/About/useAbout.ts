import {
    Globe,
    ServerCog,
    Smartphone,
    Sparkles,
} from "lucide-react";

export function useAbout() {
    const services = [
        {
            title: "Сайты",
            text: "Разработка френдли сайтов под ключ",
            icon: Globe,
        },
        {
            title: "Веб-сервисы",
            text: "Разработка веб-сервисов, боты и другой Backend-сервис на Node.js",
            icon: ServerCog,
        },
        {
            title: "Мобильные приложения",
            text: "Разрабтка Android приложений на React Native",
            icon: Smartphone,
        },
        {
            title: "Скрипты и деплои",
            text: "Перенос сущетсвующих проектов на новые сервера, а также написание разовых скриптов или регулярных запуск их по крону.",
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

    return {services, stack};
}