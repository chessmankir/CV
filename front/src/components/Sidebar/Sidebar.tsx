import {ProfileAvatar} from "@/src/components/Sidebar/ProfileAvatar";
import {Socials} from "@/src/components/Sidebar/Socials";

export function Sidebar() {
    return (
        <aside className="sidebar">
            <ProfileAvatar />
           {/* <button className="contact-toggle">Show Contacts⌄</button>*/}
            <div className="contact-info">
                <div className="line" />
                <Socials />
            </div>
        </aside>

    )
}