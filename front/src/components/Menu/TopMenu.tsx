"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

export function TopMenu() {
    const pathname = usePathname();
    console.log(pathname);
    const links = [
        {link: "/", text: "О себе"},
        {link: "/experience", text: "Опыт"},
        {link: "/contacts", text: "Контакты"},
    ]
    return (
            <nav className="nav">
                {links.map((link, index) => (
                    <Link  key={index} href={link.link} className={pathname === link.link ? "active" : ""}>
                        {link.text}
                    </Link>
                ))}
            </nav>
    )
}