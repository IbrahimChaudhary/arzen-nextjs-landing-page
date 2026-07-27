import SectionLabel from "./SectionLabel";

interface ValuesSectionProps {
  values?: Array<{ title: string; description: string }>;
}

/**
 * "Our Values" section: heading plus a bordered grid of value columns.
 */
export default function ValuesSection({ values }: ValuesSectionProps) {
  const items = values && values.length > 0 ? values : [];

  return (
    <section>
      <div className="mb-10">
        <SectionLabel>Our Values</SectionLabel>
      </div>

      <h2 className="section-title mb-8">What we stand for.</h2>

      {items.length > 0 ? (
        <div className="grid grid-cols-1 divide-y divide-[#1f1f1f] overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#0d0d0d] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 [&>*:not(:last-child)]:sm:border-r [&>*:not(:last-child)]:sm:border-[#1f1f1f]">
          {items.map((value) => (
            <div key={value.title} className="px-6 py-10">
              <h3 className="font-display text-xl font-bold text-white">{value.title}</h3>
              <p className="mt-3 text-sm leading-[1.6] text-[#8a8a8a]">{value.description}</p>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}