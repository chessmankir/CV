import Image from "next/image";
import type {StackItem} from "@/src/types/StackType";

type StackItemProps = {
    stackItem: StackItem;
}

export function StackItem({stackItem} : StackItemProps){
  return (
      <div className="tech-card" key={stackItem.name}>
          <div className="tech-icon">
              <Image
                  src={stackItem.icon}
                  alt={stackItem.name}
                  width={42}
                  height={42}
              />
          </div>
          <span className="tech-name">{stackItem.name}</span>
      </div>
  )
}