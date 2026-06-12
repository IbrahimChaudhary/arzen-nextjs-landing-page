import { services } from "@/app/data/services";
import ServiceCard from "./ServicesCard";

/**
 * Responsive grid of service cards: 1 column on mobile, 2 columns from md up.
 */
export default function WorkGrid() {
  return (
    <section className="mb-20 grid grid-cols-1 gap-6 md:mb-28 md:grid-cols-2 md:gap-7">
      {services.map((service, i) => (
        <ServiceCard key={service.title} service={service} index={i + 1} />
      ))}
    </section>
  );
}