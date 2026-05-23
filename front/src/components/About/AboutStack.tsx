import {StackType} from "@/src/types/StackType";
import {StackGroup} from "@/src/components/About/StackGroup";

type AboutStackProps = {
    stack: StackType[]
}

export function AboutStack({stack} : AboutStackProps) {
    return (
        <section id="stack" className="block tech-block">
            <h2>Стек технологий</h2>
            <div className="accent" />
            <StackGroup stack={stack} />
        </section>
    )
}