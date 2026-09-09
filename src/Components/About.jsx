import {
  Code2,
  Coffee,
  Palette,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing clean, maintainable, and efficient code is something I genuinely enjoy.",
    },
    {
      icon: Coffee,
      title: "Problem Solver",
      description:
        "I enjoy tackling complex problems and turning them into practical, elegant solutions.",
    },
    {
      icon: Palette,
      title: "Creative Mind",
      description:
        "I bring creativity and attention to detail to make every project both functional and engaging.",
    },
  ];

  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        bg-slate-50 py-24
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
            A Little About Me
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
            About Me
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
            A passionate developer who enjoys turning ideas into
            clean, functional, and meaningful digital experiences.
          </p>
        </div>

        {/* =========================
            HIGHLIGHT CARDS
        ========================== */}
        <div
          className="
            mb-12 grid grid-cols-1 gap-6
            md:grid-cols-3
          "
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="
                  group relative
                  overflow-hidden
                  rounded-3xl
                  border border-slate-200
                  bg-white/90
                  p-6
                  text-center
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
                    text-slate-300
                    dark:text-slate-700
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

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

                {/* Icon */}
                <div
                  className="
                    mx-auto mb-5
                    flex h-14 w-14
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
                    size={25}
                    className="
                      text-indigo-600
                      dark:text-indigo-400
                    "
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-xl font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-3
                    text-sm leading-6
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  {item.description}
                </p>

                {/* Bottom Label */}
                <div
                  className="
                    mt-5
                    text-xs font-bold
                    uppercase
                    tracking-[0.14em]
                    text-indigo-500
                    opacity-0
                    transition-all duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                    dark:text-indigo-400
                  "
                >
                  {item.title}
                </div>
              </article>
            );
          })}
        </div>

        {/* =========================
            ABOUT CONTENT
        ========================== */}
        <div className="mx-auto max-w-7xl">

          <div
            className="
              relative overflow-hidden
              rounded-3xl
              border border-slate-200
              bg-white/90
              p-7
              shadow-sm
              backdrop-blur-sm
              sm:p-9
              lg:p-10
              dark:border-slate-800
              dark:bg-slate-900/80
            "
          >
            {/* Decorative Gradient */}
            <div
              className="
                absolute -right-20 -top-20
                h-48 w-48
                rounded-full
                bg-indigo-300/10
                blur-3xl
                dark:bg-indigo-500/5
              "
            />

            <div className="relative">

              {/* Small Heading */}
              <div
                className="
                  mb-5 flex items-center gap-2
                  text-sm font-bold
                  uppercase
                  tracking-[0.14em]
                  text-indigo-600
                  dark:text-indigo-400
                "
              >
                <Code2 size={16} />
                My Journey
              </div>

              {/* Main Introduction */}
              <div className="space-y-5">

                <p
                  className="
                    text-base leading-8
                    text-slate-700
                    sm:text-lg
                    dark:text-slate-300
                  "
                >
                  I am a passionate{" "}
                  <span
                    className="
                      font-semibold
                      text-indigo-600
                      dark:text-indigo-400
                    "
                  >
                    MERN Stack Developer
                  </span>{" "}
                  with a strong foundation in modern web development.
                  My journey in programming started with curiosity about
                  how websites work, which gradually grew into a passion
                  for building complete and meaningful web applications.
                </p>

                <p
                  className="
                    text-base leading-8
                    text-slate-700
                    sm:text-lg
                    dark:text-slate-300
                  "
                >
                  I specialize in developing full-stack applications
                  using{" "}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    MongoDB, Express.js, React, and Node.js
                  </span>
                  . I enjoy working across both frontend and backend
                  development, from designing responsive interfaces to
                  building APIs, authentication systems, and
                  database-driven applications.
                </p>

                <p
                  className="
                    text-base leading-8
                    text-slate-700
                    sm:text-lg
                    dark:text-slate-300
                  "
                >
                  Beyond coding, I enjoy exploring new technologies,
                  improving my development skills, and working on
                  projects that challenge me to learn something new.
                  I believe that continuous learning, practical
                  experience, and a problem-solving mindset are essential
                  for becoming a better developer.
                </p>
              </div>

              {/* Technology Tags */}
              <div
                className="
                  mt-8 flex flex-wrap
                  gap-2.5
                  border-t border-slate-100
                  pt-7
                  dark:border-slate-800
                "
              >
                {[
                  "React",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "JavaScript",
                  "Tailwind CSS",
                  "REST APIs",
                  "Git",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-xl
                      border border-indigo-100
                      bg-indigo-50
                      px-3 py-2
                      text-xs font-semibold
                      text-indigo-700
                      transition-all duration-300
                      hover:border-indigo-200
                      hover:bg-indigo-100
                      dark:border-indigo-500/20
                      dark:bg-indigo-500/10
                      dark:text-indigo-300
                      dark:hover:bg-indigo-500/15
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Bottom Label */}
              <div
                className="
                  mt-7 flex items-center gap-2
                  text-xs font-bold
                  uppercase
                  tracking-[0.14em]
                  text-slate-400
                  dark:text-slate-500
                "
              >
                <Coffee size={14} />
                Always learning • Always building
                <ArrowUpRight size={14} className="text-indigo-400" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

