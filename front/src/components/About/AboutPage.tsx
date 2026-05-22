
import Image from "next/image";

import "@/src/components/Sidebar/Sidebar"
import { FaGithub } from "react-icons/fa";
import {Sidebar} from "@/src/components/Sidebar/Sidebar";
import {useAbout} from "@/src/Hooks/About/useAbout";
import {AboutMeSection} from "@/src/components/About/AboutMeSection";
import {AboutServices} from "@/src/components/About/AboutServices";



export default function AboutPage() {
    const {services, stack} = useAbout();
    return (
        <div className="home-page">
            <AboutMeSection />
            <AboutServices services={services} />
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