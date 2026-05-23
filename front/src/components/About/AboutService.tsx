import {ServicesType} from "@/src/types/ServicesType";

type AboutServiceProps = {
    service: ServicesType
}

export function AboutService({service} : AboutServiceProps){
    const Icon = service.icon;
    return (
        <article
            className="card"
            key={service.title}
        >
            <div className="icon">
                <Icon
                    size={28}
                    strokeWidth={2.2}
                />
            </div>

            <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
            </div>
        </article>
    )
}