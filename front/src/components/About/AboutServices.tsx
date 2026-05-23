import { ServicesType } from "@/src/types/ServicesType";
import {AboutService} from "@/src/components/About/AboutService";

type AboutServicesProps = {
    services: ServicesType[];
};

export function AboutServices({services}: AboutServicesProps) {
    return (
        <section className="block">
            <h2>Что я делаю</h2>
            <div className="cards">
                {services.map((service, index) => {
                    return (
                      <AboutService key={index} service={service}/>
                    );
                })}
            </div>
        </section>
    );
}