import {useExperience} from "@/src/Hooks/Experience/useExperience";
import {ResumeWrapper} from "@/src/components/Experience/ResumeWrapper";
import {EducationSection} from "@/src/components/Experience/EducationSection";
import {ExperienceSection} from "@/src/components/Experience/ExperienceSection";

export function ExperiencePage() {
    const {education, experience} = useExperience();

    return (
        <section id="projects" className="block resume-block">
            <h2>Опыт</h2>
            <div className="accent"/>

            <ResumeWrapper name="Обучение">
                <EducationSection education={education} />
            </ResumeWrapper>

            <ResumeWrapper name="Стаж">
                <ExperienceSection experience={experience}  />
            </ResumeWrapper>
        </section>
    );
}