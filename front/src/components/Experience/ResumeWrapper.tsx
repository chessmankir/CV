import {ReactNode} from "react";

type ResumeWrapperProps= {
    name: string;
    children: ReactNode;
}

export function ResumeWrapper({name, children} : ResumeWrapperProps){
    return (
        <div className="resume-section">
            <div className="resume-title">
                <div className="resume-icon">▤</div>
                <h3>{name}</h3>
            </div>

            <div className="timeline">
                {children}
            </div>
        </div>
    );
}