import { ServicesType } from "@/src/types/ServicesType";

type AboutServicesProps = {
    services: ServicesType[];
};

export function AboutServices({services}: AboutServicesProps) {
    return (
        <section className="block">
            <h2>Что я делаю</h2>
            <div className="cards">
                {services.map((service) => {
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
                    );
                })}
            </div>
        </section>
    );
}