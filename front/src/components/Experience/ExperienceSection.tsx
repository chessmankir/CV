import {ExperienceType} from "@/src/types/ExperienceType";

type ExperienceSectionProps = {
    experience:  ExperienceType[]
}

export function ExperienceSection({experience} : ExperienceSectionProps){
    return (
        <div className="timeline-block">
            {experience.map((item) => (
                <div className="timeline-item" key={item.title}>
                    <h4>{item.title}</h4>
                    <p>{item.company}</p>
                    <span>{item.period}</span>
                    <ul>
                        {item.tasks.map((task) => (
                            <li key={task}>{task}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}