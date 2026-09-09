import {
  Award,
  CalendarDays,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Sc. Honors in Computer Science Engineering",
      subtitle: "Professional Honors",
      institution:
        "National University of Bangladesh — Tejgaon College",
      GPA: "CGPA : Soon",
      year: "2022 - 2025",
      description:
        "I'm studying Computer Science and Engineering, where I've built a strong foundation in programming, data structures, algorithms, databases, networks, and software engineering—sharpening my problem-solving skills and real-world application development.",
      current: true,
    },
    {
      degree: "Higher Secondary Certificate",
      subtitle: "HSC — Science",
      institution: "BCIC College",
      GPA: "GPA : 5.00",
      year: "2018 - 2020",
      description:
        "I completed my HSC in Science with a GPA of 5.00, gaining strong analytical and technical skills through subjects like Mathematics, Physics, Chemistry, Biology, and ICT.",
    },
    {
      degree: "Secondary School Certificate",
      subtitle: "SSC — Science",
      institution: "Ahasania Mission School and College",
      GPA: "GPA : 5.00",
      year: "2016 - 2018",
      description:
        "I achieved a GPA of 5.00 in SSC (Science), building a solid foundation in Mathematics, Physics, Chemistry, Biology, and ICT, which fueled my passion for technology.",
    },
  ];

  return (
    <section
      id="education"
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
            Academic Journey
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
            Education
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
            My academic journey has built the foundation for my
            problem-solving skills, technical knowledge, and passion
            for software development.
          </p>
        </div>

        {/* =========================
            EDUCATION TIMELINE
        ========================== */}
        <div className="relative mx-auto max-w-5xl">

          {/* Timeline Line */}
          <div
            className="
              absolute left-5 top-5 bottom-5
              hidden w-px
              bg-linear-to-b
              from-indigo-400
              via-blue-300
              to-transparent
              md:block
              dark:from-indigo-500
              dark:via-blue-700
            "
          />

          <div className="space-y-8">

            {education.map((edu) => (
              <article
                key={edu.degree}
                className="
                  group relative
                  flex gap-6
                  md:gap-8
                "
              >

                {/* =========================
                    TIMELINE ICON
                ========================== */}
                <div
                  className="
                    relative z-10
                    hidden shrink-0
                    md:block
                  "
                >
                  <div
                    className={`
                      flex h-11 w-11
                      items-center justify-center
                      rounded-xl
                      border
                      bg-white
                      shadow-sm
                      transition-all duration-300
                      group-hover:-translate-y-1
                      group-hover:shadow-lg
                      dark:bg-slate-900

                      ${
                        edu.current
                          ? `
                            border-indigo-300
                            shadow-indigo-100
                            dark:border-indigo-500/40
                            dark:shadow-indigo-950/30
                          `
                          : `
                            border-slate-200
                            dark:border-slate-800
                          `
                      }
                    `}
                  >
                    <GraduationCap
                      size={20}
                      className="
                        text-indigo-600
                        dark:text-indigo-400
                      "
                    />
                  </div>
                </div>

                {/* =========================
                    EDUCATION CARD
                ========================== */}
                <div className="flex-1">

                  <div
                    className={`
                      relative overflow-hidden
                      rounded-3xl
                      border
                      bg-white/90
                      p-6
                      shadow-sm
                      backdrop-blur-sm
                      transition-all duration-500
                      hover:-translate-y-1
                      hover:shadow-2xl
                      sm:p-7
                      dark:bg-slate-900/80

                      ${
                        edu.current
                          ? `
                            border-indigo-200/80
                            shadow-indigo-100/40
                            dark:border-indigo-500/20
                            dark:shadow-indigo-950/30
                          `
                          : `
                            border-slate-200
                            dark:border-slate-800
                          `
                      }
                    `}
                  >

                    {/* Left Gradient Accent */}
                    <div
                      className="
                        absolute left-0 top-0
                        h-full w-1
                        bg-linear-to-b
                        from-indigo-500
                        via-blue-500
                        to-violet-500
                        opacity-70
                        transition-opacity duration-300
                        group-hover:opacity-100
                      "
                    />

                    {/* Mobile Icon */}
                    <div
                      className="
                        mb-5 flex
                        items-center
                        justify-between
                        md:hidden
                      "
                    >
                      <div
                        className="
                          flex h-11 w-11
                          items-center justify-center
                          rounded-xl
                          border
                          border-indigo-100
                          bg-indigo-50
                          dark:border-indigo-500/20
                          dark:bg-indigo-500/10
                        "
                      >
                        <GraduationCap
                          size={21}
                          className="
                            text-indigo-600
                            dark:text-indigo-400
                          "
                        />
                      </div>

                      {edu.current && (
                        <span
                          className="
                            rounded-full
                            border border-indigo-100
                            bg-indigo-50
                            px-3 py-1.5
                            text-xs font-bold
                            text-indigo-600
                            dark:border-indigo-500/20
                            dark:bg-indigo-500/10
                            dark:text-indigo-300
                          "
                        >
                          Current
                        </span>
                      )}
                    </div>

                    {/* =========================
                        CARD HEADER
                    ========================== */}
                    <div
                      className="
                        flex flex-col gap-4
                        sm:flex-row
                        sm:items-start
                        sm:justify-between
                      "
                    >
                      <div className="pr-2">

                        <div className="flex flex-wrap items-center gap-2">

                          <h3
                            className="
                              text-xl font-bold
                              leading-snug
                              text-slate-900
                              sm:text-2xl
                              dark:text-white
                            "
                          >
                            {edu.degree}
                          </h3>

                          {edu.current && (
                            <span
                              className="
                                hidden rounded-full
                                border border-indigo-100
                                bg-indigo-50
                                px-3 py-1
                                text-[11px]
                                font-bold uppercase
                                tracking-wide
                                text-indigo-600
                                md:inline-flex
                                dark:border-indigo-500/20
                                dark:bg-indigo-500/10
                                dark:text-indigo-300
                              "
                            >
                              Current
                            </span>
                          )}
                        </div>

                        <p
                          className="
                            mt-2
                            text-sm font-bold
                            text-indigo-600
                            dark:text-indigo-400
                          "
                        >
                          {edu.subtitle}
                        </p>

                        <p
                          className="
                            mt-1
                            text-sm font-medium
                            text-slate-600
                            dark:text-slate-400
                          "
                        >
                          {edu.institution}
                        </p>
                      </div>

                      {/* =========================
                          YEAR BADGE
                      ========================== */}
                      <div
                        className="
                          inline-flex shrink-0
                          items-center gap-2
                          self-start
                          rounded-xl
                          border border-slate-200
                          bg-slate-50
                          px-3.5 py-2
                          text-sm font-semibold
                          text-slate-600
                          dark:border-slate-700
                          dark:bg-slate-800/70
                          dark:text-slate-300
                        "
                      >
                        <CalendarDays
                          size={15}
                          className="
                            text-indigo-500
                            dark:text-indigo-400
                          "
                        />

                        {edu.year}
                      </div>
                    </div>

                    {/* =========================
                        GPA / ACHIEVEMENT
                    ========================== */}
                    <div className="mt-5">

                      <div
                        className="
                          inline-flex
                          items-center gap-2
                          rounded-xl
                          border
                          border-indigo-100
                          bg-indigo-50
                          px-3 py-2
                          text-sm font-semibold
                          text-indigo-700
                          transition-colors
                          group-hover:border-indigo-200
                          dark:border-indigo-500/20
                          dark:bg-indigo-500/10
                          dark:text-indigo-300
                        "
                      >
                        <Award size={16} />
                        {edu.GPA}
                      </div>

                    </div>

                    {/* =========================
                        DESCRIPTION
                    ========================== */}
                    <p
                      className="
                        mt-5
                        max-w-3xl
                        text-sm leading-7
                        text-slate-600
                        dark:text-slate-400
                      "
                    >
                      {edu.description}
                    </p>

                    {/* =========================
                        BOTTOM DETAIL
                    ========================== */}
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
                        text-indigo-500
                        opacity-0
                        transition-all duration-300
                        group-hover:translate-x-1
                        group-hover:opacity-100
                        dark:border-slate-800
                        dark:text-indigo-400
                      "
                    >
                      <GraduationCap size={14} />
                      Academic Milestone
                    </div>

                  </div>
                </div>
              </article>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
