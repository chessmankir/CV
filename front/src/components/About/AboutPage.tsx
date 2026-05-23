import "@/src/components/Sidebar/Sidebar"
import {useAbout} from "@/src/Hooks/About/useAbout";
import {AboutMeSection} from "@/src/components/About/AboutMeSection";
import {AboutServices} from "@/src/components/About/AboutServices";
import {AboutStack} from "@/src/components/About/AboutStack";

export default function AboutPage() {
    const {services, stack} = useAbout();
    return (
        <div className="home-page">
            <AboutMeSection />
            <AboutServices services={services} />
            <AboutStack stack={stack} />
        </div>
    );
}