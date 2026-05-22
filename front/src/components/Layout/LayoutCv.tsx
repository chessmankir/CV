import type { ReactNode } from "react";
import { Sidebar } from "@/src/components/Sidebar/Sidebar";
import {TopMenu} from "@/src/components/Menu/TopMenu";

type LayoutCvProps = {
    children: ReactNode;
};

export function LayoutCv({ children }: LayoutCvProps) {

    return (
        <main className="portfolio">
            <Sidebar />
            <section className="content">
                <TopMenu />
                <div className="page_cv">{children}</div>
            </section>
        </main>
    );
}