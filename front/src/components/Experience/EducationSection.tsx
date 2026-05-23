import {EducationType} from "@/src/types/EducationType";

type EducationSectionProps = {
    education: EducationType[]
}

export function EducationSection({education} : EducationSectionProps) {
    return (
        <div className="timeline-block">
            {education.map((item) => (
                <div className="timeline-item" key={item.title}>
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                    <span>{item.period}</span>
                </div>
            ))}
        </div>
    )
}