import { processSteps } from "@/app/data/process";
import SectionLabel from "./SectionLabel";

const GRADIENT_TEXT =
  "bg-gradient-to-r from-[#5fbf5a] via-[#a9d17a] to-[#e89bb0] bg-clip-text text-transparent";

export default function ProcessSection() {
  const total = processSteps.length;

  return (
    <section className="mb-20 md:mb-28">
      <div className="mb-8">
        <SectionLabel>Our Process</SectionLabel>
      </div>

      <h2 className="mb-10 font-display text-3xl font-normal">How we work.</h2>

      <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#0d0d0d] sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => {
          const number = String(i + 1).padStart(2, "0");

          // Mobile: divider above every item except the first.
          const mobileBorder = i > 0 ? "border-t border-[#1f1f1f]" : "";
          // sm (2-col): no top border; right border on left column; top border on second row.
          const smBorder = [
            "sm:border-t-0",
            i % 2 === 0 ? "sm:border-r sm:border-[#1f1f1f]" : "",
            i >= 2 ? "sm:border-t sm:border-[#1f1f1f]" : "",
          ].join(" ");
          // lg (4-col): right border on all but last; clear any top borders.
          const lgBorder = [
            "lg:border-t-0",
            i < total - 1 ? "lg:border-r lg:border-[#1f1f1f]" : "lg:border-r-0",
          ].join(" ");

          return (
            <div
              key={step.title}
              className={`flex flex-col gap-[8.76px] p-7 ${mobileBorder} ${smBorder} ${lgBorder}`}
            >
              <span
                className={`font-display text-3xl font-extrabold ${GRADIENT_TEXT}`}
              >
                {number}
              </span>
              <h3 className="mt-4 font-sans text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.6] text-[#8a8a8a]">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
