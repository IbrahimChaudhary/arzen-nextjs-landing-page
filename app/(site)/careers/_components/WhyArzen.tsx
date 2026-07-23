const values = [
  {
    title: "Remote First",
    description: "Work from anywhere. Your timezone, your setup, your desk.",
  },
  {
    title: "Growth Focused",
    description: "Learn constantly and level up with mentorship built in.",
  },
  {
    title: "Real Projects",
    description: "Work that ships to real users — no vanity assignments.",
  },
  {
    title: "Strong Culture",
    description: "A team that cares about the work and about each other.",
  },
];

export default function WhyArzen() {
  return (
    <section className="bg-[#0a0a0a] px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <span className="text-sm font-bold text-[#4ADE80]">
          Why Arzen
        </span>
        <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          A studio built around<br />how people actually work best.
        </h2>
        <p className="mt-4 max-w-2xl text-base text-gray-400">
          No open floor-plan theater, no busywork. Just real projects and a
          team that has your back.
        </p>

        <div className="mt-12 grid grid-cols-1 divide-y divide-gray-800 rounded-2xl border border-gray-800 bg-[#121212] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="p-8">
              <h3 className="text-base font-bold text-white">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}