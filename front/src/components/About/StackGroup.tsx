import {StackItem} from "@/src/components/About/StackItem";
import {StackType} from "@/src/types/StackType";

type StackGroupProps = {
    stack: StackType[]
}
export function StackGroup({stack} : StackGroupProps){
    return (
        <div className="tech-list">
            {stack.map((group) => (
                <div className="tech-group" key={group.title}>
                    <h3>{group.title}</h3>
                    <div className="tech-grid">
                        {group.items.map((item, index) => (
                            <StackItem key={index} stackItem={item} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}