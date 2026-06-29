import { services } from "@/app/data/services";
import ServiceCard from "./ServicesCard";
import FadeIn from "@/app/components/animations/FadeIn";

/**
 * Responsive grid of service cards: 1 column on mobile, 2 columns from md up.
 */
export default function WorkGrid() {
  return (
    <section className="mb-20 grid grid-cols-1 gap-6 md:mb-28 md:grid-cols-2 md:gap-7">
      {services.map((service, i) => (
        <FadeIn key={service.title} direction="up" delay={(i % 2) * 0.1} className="h-full">
          <ServiceCard service={service} index={i + 1} />
        </FadeIn>
      ))}
    </section>
  );
}