import SDG from "./ui/SDG";

const projects = [
  {
    title: "kanba — Project Management SaaS",
    category: "Web Development · SaaS Platform",
    logo: "kanba",
    bg: "bg-[#03160B]",
    text: "text-[#56D364]",
    size: "large",
  },
  {
    title: "Ideaa Landing Page",
    category: "UI/UX Design · Landing Page",
    logo: "Ideaa.",
    bg: "bg-[#181736]",
    text: "text-[#818CF8]",
    size: "small",
  },
  {
    title: "Circle App Dashboard",
    category: "Web Application · Dashboard",
    logo: "circle",
    bg: "bg-[#250A18]",
    text: "text-[#EC4899]",
    size: "small",
  },
];

const Projects = () => {
  return (
    <section className="bg-[#0D0D0D] text-white px-5 md:px-10 lg:px-20 py-20">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <SDG title="Our Work" />

            <h2 className="font-heading text-[38px] md:text-[53px] leading-none tracking-[-0.04em]">
              Selected Projects
            </h2>
          </div>

          <button
            className="
              hidden md:flex
              items-center justify-center
              h-11 px-5
              rounded-full
              border border-border
              text-sm text-white/60
              hover:text-white
              hover:border-white/40
              transition-all duration-300
            "
          >
            View Our Work
          </button>
        </div>

        {/* Featured Project */}
        <ProjectCard project={projects[0]} />

        {/* Secondary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ProjectCard project={projects[1]} />
          <ProjectCard project={projects[2]} />
        </div>

        {/* CTA */}
        <div
          className="
            relative overflow-hidden
            rounded-[28px]
            border border-border
            gradient-bg
            px-7 md:px-10
            py-10 md:py-14
          "
        >
          <div className="flex flex-col gap-5 relative z-10">
            <SDG title="Let's Work Together" classes="bg-[#0E1911] border-none" />

            <div className="font-heading leading-[0.95] tracking-[-0.04em]">
              <h3 className="text-[34px] md:text-[52px]">
                Let's Build Something
              </h3>

              <span className="text-btn-gradient text-[34px] md:text-[52px]">
                Powerful Together
              </span>
            </div>

            <p className="max-w-[480px] text-sm leading-[24px] text-white/50">
              High-performance websites and web applications
              that are fast, secure and scalable. Built with
              modern tech stacks.
            </p>

            <button
              className="
                w-fit h-11 px-6
                rounded-full
                bg-btn-gradient
                text-black
                text-sm font-semibold
                hover:scale-[1.02]
                transition-transform
              "
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

/* ------------------------------ */
/* Project Card */
/* ------------------------------ */

interface ProjectCardProps {
  project: {
    title: string;
    category: string;
    logo: string;
    bg: string;
    text: string;
    size: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-[18px]
        border border-border
        bg-[#111]
        hover:border-white/20
        transition-all duration-300
      "
    >
      {/* Preview */}
      <div
        className={`
          ${project.bg}
          ${
            project.size === "large"
              ? "h-[258px]"
              : "h-[258px]"
          }
          flex items-center justify-center
          relative overflow-hidden
        `}
      >
        <span
          className={`
            ${project.text}
            font-heading
            tracking-[-0.05em]
            transition-transform duration-500
            group-hover:scale-105
            ${
              project.size === "large"
                ? "text-[74px]"
                : "text-[52px]"
            }
          `}
        >
          {project.logo}
        </span>

        {/* subtle glow */}
        <div
          className="
            absolute inset-0
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_70%)]
          "
        />
      </div>

      {/* Content */}
      <div
        className="
          border-t border-border
          bg-[#111]
          px-5 py-4
        "
      >
        <p className="text-[11px] tracking-wide text-white/35 mb-1">
          {project.category}
        </p>

        <h3 className="text-[15px] font-semibold tracking-[-0.02em]">
          {project.title}
        </h3>
      </div>
    </div>
  );
};