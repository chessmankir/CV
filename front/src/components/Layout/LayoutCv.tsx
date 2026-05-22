import type { ReactNode } from "react";
import { Sidebar } from "@/src/components/Sidebar/Sidebar";
import Link from "next/link";

type LayoutCvProps = {
    children: ReactNode;
};

export function LayoutCv({ children }: LayoutCvProps) {
    return (
        <main className="portfolio">
            <Sidebar />

            <section className="content">
                <nav className="nav">
                    <Link href="/">О себе</Link>
                    <a href="/experience">Опыт</a>
                   {/* <a href="#stack">Стек</a>*/}
                    <a href="/contacts">Контакты</a>
                </nav>
                <div className="page_cv">{children}</div>
            </section>
        </main>
    );
}