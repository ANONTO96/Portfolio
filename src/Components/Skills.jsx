import {
  Code2,
  Brain,
  Terminal,
  Puzzle,
  Users,
  Clock,
  Lightbulb,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const Skills = () => {
  const skills = {
    technical: [
      {
        icon: Code2,
        name: "Frontend Development",
        description:
          "Building responsive and interactive user interfaces with modern frontend technologies.",
        skills: [
          "React.js",
          "JavaScript (ES6+)",
          "Tailwind CSS",
          "Daisy UI",
          "HTML5",
        ],
      },
      {
        icon: Terminal,
        name: "Backend Development",
        description:
          "Developing server-side applications, APIs, authentication systems, and database-driven solutions.",
        skills: [
          "Node.js",
          "Express.js",
          "MongoDB & MySQL",
          "RESTful APIs",
          "JWT Authentication",
        ],
      },
      {
        icon: Brain,
        name: "Development Tools",
        description:
          "Using modern development tools and workflows to build, test, debug, and maintain applications.",
        skills: [
          "Git",
          "VS Code",
          "Postman",
          "MongoDB Compass",
          "NPM",
        ],
      },
      {
        icon: Puzzle,
        name: "Additional Skills",
        description:
          "Applying practical development techniques to improve performance, integration, and security.",
        skills: [
          "Responsive Design",
          "API Integration",
          "Performance Optimization",
          "Payment Gateway Integration",
          "Web Security",
        ],
      },
    ],

    soft: [
      {
        icon: Users,
        name: "Team Collaboration",
        description:
          "Strong ability to work in cross-functional teams and communicate effectively with stakeholders.",
      },
      {
        icon: Clock,
        name: "Time Management",
        description:
          "Excellent at prioritizing tasks and meeting deadlines in fast-paced development environments.",
      },
      {
        icon: Lightbulb,
        name: "Problem Solving",
        description:
          "Analytical thinker with a knack for breaking down complex problems and finding practical solutions.",
      },
      {
        icon: Target,
        name: "Adaptability",
        description:
          "Quick learner who stays updated with modern technologies, development practices, and industry trends.",
      },
    ],
  };

  return (
    <section
      id="skills"
      className="
        relative overflow-hidden
        bg-slate-50 pt-24
        transition-colors duration-500
        dark:bg-[#0b1220]
      "
    >
      {/* =========================
          BACKGROUND DECORATION
      ========================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute -left-32 top-20
            h-72 w-72 rounded-full
            bg-indigo-300/20 blur-3xl
            dark:bg-indigo-500/10
          "
        />

        <div
          className="
            absolute -right-32 bottom-20
            h-80 w-80 rounded-full
            bg-blue-300/20 blur-3xl
            dark:bg-blue-500/10
          "
        />

        <div
          className="
            absolute left-1/2 top-1/3
            h-56 w-56
            -translate-x-1/2
            rounded-full
            bg-violet-300/10 blur-3xl
            dark:bg-violet-500/5
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <div
            className="
              mb-4 inline-flex items-center gap-2
                rounded-full border
                border-indigo-100
                hover:border-indigo-200
                transition-all duration-300
                bg-white/80
                px-4 py-2
                text-sm font-semibold
                text-indigo-600
                shadow-sm backdrop-blur-sm
                dark:border-indigo-500/20
                dark:bg-slate-900/60
                dark:text-indigo-300
                dark:hover:border-indigo-500/30
                dark:hover:bg-indigo-500/10
            "
          >
            <Sparkles size={15} />
            What I Work With
          </div>

          <h2
            className="
              text-4xl font-extrabold
              tracking-tight
              text-slate-900
              sm:text-5xl
              dark:text-white
            "
          >
            Skills
          </h2>

          <div
            className="
              mx-auto mt-5 h-1 w-16 rounded-full
              bg-linear-to-r
              from-blue-500
              via-indigo-500
              to-violet-500
            "
          />

          <p
            className="
              mx-auto mt-6 max-w-2xl
              text-base leading-7
              text-slate-600
              sm:text-lg
              dark:text-slate-400
            "
          >
            A combination of technical expertise and problem-solving
            abilities that I use to build modern, responsive, and
            practical web applications.
          </p>
        </div>

        {/* =====================================================
            TECHNICAL SKILLS
        ====================================================== */}
        <div className="mb-16">

          {/* Section Heading */}
          <div className="mb-8 flex items-center justify-center gap-3">
            <div
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                bg-indigo-50
                text-indigo-600
                dark:bg-indigo-500/10
                dark:text-indigo-400
              "
            >
              <Code2 size={20} />
            </div>

            <h3
              className="
                text-2xl font-bold
                text-slate-900
                dark:text-white
              "
            >
              Technical Skills
            </h3>
          </div>

          {/* Technical Cards */}
          <div
            className="
              grid grid-cols-1 gap-6
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {skills.technical.map((category, index) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.name}
                  className="
                    group relative
                    flex h-full flex-col
                    overflow-hidden
                    rounded-3xl
                    border border-slate-200
                    bg-white/90
                    p-6
                    shadow-sm
                    backdrop-blur-sm
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:shadow-2xl
                    dark:border-slate-800
                    dark:bg-slate-900/80
                  "
                >
                  {/* Gradient Accent */}
                  <div
                    className="
                      absolute left-0 top-0
                      h-1 w-full
                      bg-linear-to-r
                      from-blue-500
                      via-indigo-500
                      to-violet-500
                      opacity-60
                      transition-opacity duration-300
                      group-hover:opacity-100
                    "
                  />

                  {/* Number */}
                  <div
                    className="
                      absolute right-5 top-5
                      text-xs font-bold
                      tracking-widest
                      text-indigo-400
                      group-hover:text-indigo-500
                      dark:text-slate-700
                      dark:group-hover:text-indigo-400
                      transition-all duration-300
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div
                    className="
                      mb-5 flex h-12 w-12
                      items-center justify-center
                      rounded-2xl
                      border border-indigo-100
                      bg-indigo-50
                      transition-all duration-300
                      group-hover:-translate-y-1
                      group-hover:shadow-lg
                      group-hover:shadow-indigo-100
                      dark:border-indigo-500/20
                      dark:bg-indigo-500/10
                      dark:group-hover:shadow-indigo-950/30
                    "
                  >
                    <Icon
                      size={22}
                      className="
                        text-indigo-600
                        dark:text-indigo-400
                      "
                    />
                  </div>

                  {/* Category */}
                  <h4
                    className="
                      text-lg font-bold
                      leading-snug
                      text-slate-900
                      dark:text-white
                    "
                  >
                    {category.name}
                  </h4>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      text-sm leading-6
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    {category.description}
                  </p>

                  {/* Skill Chips */}
                  <div className="mt-5 grid grid-cols-1 gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          inline-flex items-center gap-1.5
                          rounded-lg
                          border border-slate-200
                          bg-slate-50
                          px-2.5 py-1.5
                          text-xs font-medium
                          text-slate-600
                          transition-all duration-300
                          hover:border-indigo-100
                          hover:text-indigo-600
                          dark:border-slate-800
                          dark:bg-slate-800/70
                          dark:text-slate-300
                          dark:hover:border-indigo-500/20
                          dark:hover:text-indigo-300
                          hover:-translate-y-1
                          hover:shadow-md
                        "
                      >
                        <CheckCircle2
                          size={12}
                          className="
                            text-indigo-400
                            dark:text-indigo-500
                          "
                        />

                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Detail */}
                  <div
                    className="
                      mt-auto pt-6
                      flex items-center gap-2
                      text-xs font-bold
                      uppercase
                      tracking-[0.14em]
                      text-indigo-500
                      opacity-0
                      transition-all duration-300
                      group-hover:translate-x-1
                      group-hover:opacity-100
                      dark:text-indigo-400
                    "
                  >
                    <Code2 size={13} />
                    Core Expertise
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            SOFT SKILLS
        ====================================================== */}
        <div>

          {/* Section Heading */}
          <div className="mb-8 flex items-center justify-center gap-3">
            <div
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                bg-blue-50
                text-blue-600
                dark:bg-blue-500/10
                dark:text-blue-400
              "
            >
              <Brain size={20} />
            </div>

            <h3
              className="
                text-2xl font-bold
                text-slate-900
                dark:text-white
              "
            >
              Soft Skills
            </h3>
          </div>

          {/* Soft Skill Cards */}
          <div
            className="
              grid grid-cols-1 gap-6
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {skills.soft.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <article
                  key={skill.name}
                  className="
                    group relative
                    overflow-hidden
                    rounded-3xl
                    border border-slate-200
                    bg-white/90
                    p-6
                    shadow-sm
                    backdrop-blur-sm
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:shadow-2xl
                    dark:border-slate-800
                    dark:bg-slate-900/80
                  "
                >
                  {/* Number */}
                  <div
                    className="
                      absolute right-5 top-5
                      text-xs font-bold
                      tracking-widest
                      text-blue-300
                      dark:text-slate-700
                      group-hover:text-blue-500
                      dark:group-hover:text-blue-400
                      transition-all duration-300
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div
                    className="
                      mb-5 flex h-12 w-12
                      items-center justify-center
                      rounded-2xl
                      border border-blue-100
                      bg-blue-50
                      transition-all duration-300
                      group-hover:-translate-y-1
                      group-hover:shadow-lg
                      group-hover:shadow-blue-100
                      dark:border-blue-500/20
                      dark:bg-blue-500/10
                      dark:group-hover:shadow-blue-950/30
                    "
                  >
                    <Icon
                      size={22}
                      className="
                        text-blue-600
                        dark:text-blue-400
                      "
                    />
                  </div>

                  {/* Title */}
                  <h4
                    className="
                      text-lg font-bold
                      text-slate-900
                      dark:text-white
                    "
                  >
                    {skill.name}
                  </h4>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      text-sm leading-6
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    {skill.description}
                  </p>

                  {/* Bottom Detail */}
                  <div
                    className="
                      mt-6
                      flex items-center gap-2
                      border-t
                      border-slate-100
                      pt-4
                      text-xs font-bold
                      uppercase
                      tracking-[0.14em]
                      text-blue-500
                      opacity-0
                      transition-all duration-300
                      group-hover:translate-x-1
                      group-hover:opacity-100
                      dark:border-slate-800
                      dark:text-blue-400
                    "
                  >
                    <Target size={13} />
                    Professional Strength
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
