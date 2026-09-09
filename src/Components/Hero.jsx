import { useEffect, useState } from "react";
import {
  ArrowDown,
  Code2,
  Database,
  Download,
  Facebook,
  Github,
  Globe2,
  Linkedin,
  Sparkles,
} from "lucide-react";
import toast from "react-hot-toast";

import image from "../assets/1000005139-removebg (1)-bv863erv.png";

const Hero = () => {
  const [showDeveloper, setShowDeveloper] = useState(false);
  const [text, setText] = useState("");

  const fullText = "Developer";
  const typingSpeed = 180;

  useEffect(() => {
    const delayShow = setTimeout(() => {
      setShowDeveloper(true);

      let index = 0;

      const typingInterval = setInterval(() => {
        setText(fullText.slice(0, index));
        index++;

        if (index > fullText.length) {
          clearInterval(typingInterval);
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    }, 1000);

    return () => clearTimeout(delayShow);
  }, []);

  const handleDownloadClick = () => {
    toast(
      (t) => (
        <div className="flex flex-col items-center gap-4 px-4 py-5">
          <div className="flex items-center gap-2">
            <Download size={18} className="text-indigo-400" />
            <span className="font-semibold text-white">
              Download Options
            </span>
          </div>

          <div className="flex gap-3">
            <button
              className="
                rounded-xl bg-blue-600 px-5 py-2.5
                font-semibold text-white
                shadow-lg shadow-blue-950/30
                transition-all duration-300
                hover:-translate-y-0.5 hover:bg-blue-500
              "
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1gMMRxYoWZRwJshtfjsB-iOrKeoAuerw6/view?usp=sharing",
                  "_blank"
                );
                toast.dismiss(t.id);
              }}
            >
              CV
            </button>

            <button
              className="
                rounded-xl bg-blue-600 px-5 py-2.5
                font-semibold text-white
                shadow-lg shadow-blue-950/30
                transition-all duration-300
                hover:-translate-y-0.5 hover:bg-blue-500
              "
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1YXMDP5iu_i_k1JezojpEnyahUMb0Pr0D/view?usp=sharing",
                  "_blank"
                );
                toast.dismiss(t.id);
              }}
            >
              Resume
            </button>
          </div>
        </div>
      ),
      {
        duration: 6000,
        position: "top-center",
        style: {
          background: "rgba(15, 23, 42, 0.95)",
          color: "white",
          minWidth: "300px",
          border: "1px solid rgba(99, 102, 241, 0.25)",
          borderRadius: "16px",
          marginTop: "54px",
        },
      }
    );
  };

  return (
    <section
      id="home"
      className="
        relative min-h-screen overflow-hidden
        bg-slate-50
        transition-colors duration-500
        dark:bg-[#0b1220]
      "
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute -left-40 top-20
            h-96 w-96 rounded-full
            bg-indigo-400/20 blur-3xl
            dark:bg-indigo-500/10
          "
        />

        <div
          className="
            absolute -right-40 top-1/4
            h-112 w-md rounded-full
            bg-blue-300/20 blur-3xl
            dark:bg-blue-500/10
          "
        />

        <div
          className="
            absolute left-1/2 bottom-0
            h-80 w-80 -translate-x-1/2
            rounded-full
            bg-violet-400/10 blur-3xl
            dark:bg-violet-500/5
          "
        />

        {/* Subtle grid */}
        <div
          className="
            absolute inset-0 opacity-[0.035]
            dark:opacity-[0.045]
            bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
            bg-size-[48px_48px]
          "
        />
      </div>

      {/* Floating Hero Decorations */}
<div className="pointer-events-none absolute inset-0 overflow-hidden">

  {/* Code Icon — upper left */}
<div
  className="
    absolute left-[10%] top-[20%]
    lg:left-[20%] lg:top-[15%]
    xl:left-[12%] xl:top-[17%]
    flex
    h-14 w-14
    rotate-[-15deg]
    items-center justify-center
    rounded-2xl
    border border-indigo-300/30
    bg-indigo-500/5
    text-indigo-500/45
    shadow-lg shadow-indigo-500/5
    backdrop-blur-sm
    animate-[heroFloat_6s_ease-in-out_infinite]
    dark:border-indigo-400/15
    dark:bg-indigo-400/5
    dark:text-indigo-300/40
  "
>
  <Code2 size={23} />
</div>

{/* Database Icon — middle right */}
<div
  className="
    absolute right-[7%] top-[45%]
    lg:right-[5%] lg:top-[30%]
    xl:right-[10%]
    flex
    h-14 w-14
    rotate-15
    items-center justify-center
    rounded-2xl
    border border-blue-300/30
    bg-blue-500/5
    text-blue-500/45
    shadow-lg shadow-blue-500/5
    backdrop-blur-sm
    animate-[heroFloat_7s_ease-in-out_infinite]
    dark:border-blue-400/15
    dark:bg-blue-400/5
    dark:text-blue-300/40
  "
>
  <Database size={23} />
</div>

{/* Globe Icon — lower left */}
<div
  className="
    absolute bottom-[25%] left-[15%]
    md:left-[25%]
    lg:bottom-[10%] lg:left-[40%]
    xl:left-[45%]
    flex
    h-14 w-14
    rotate-[-5deg]
    items-center justify-center
    rounded-2xl
    border border-violet-300/30
    bg-violet-500/5
    text-violet-500/45
    shadow-lg shadow-violet-500/5
    backdrop-blur-sm
    animate-[heroFloat_5.5s_ease-in-out_infinite]
    dark:border-violet-400/15
    dark:bg-violet-400/5
    dark:text-violet-300/40
  "
>
  <Globe2 size={23} />
</div>

</div>

      <div
        className="
          relative mx-auto flex min-h-screen max-w-7xl
          items-center px-4 pt-24 pb-20
          sm:px-6 lg:px-8
        "
      >
        <div
          className="
            grid w-full grid-cols-1 items-center gap-10 
            lg:grid-cols-[1.1fr_0.9fr]
            md:gap-6 lg:gap-8
          "
        >
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div
              className="
                mb-6 inline-flex items-center gap-2
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
              Full-Stack Web Developer
            </div>

            {/* Heading */}
            <h1
              className="
                text-4xl font-extrabold
                leading-[1.1]
                tracking-tight
                text-slate-900
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                dark:text-white
              "
            >
              <span className="block">MERN Stack</span>

              {showDeveloper && (
                <span
                  className="
                     block
                    bg-linear-to-r
                    from-blue-500
                    via-indigo-500
                    to-violet-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  {text}
                  <span className="text-indigo-500 dark:text-indigo-400">
                    .
                  </span>
                </span>
              )}
            </h1>

            {/* Divider */}
            <div
              className="
                mx-auto mt-6 h-1 w-20
                rounded-full
                bg-linear-to-r
                from-blue-500
                via-indigo-500
                to-violet-500
                lg:mx-0
              "
            />

            {/* Description */}
            <p
              className="
                mx-auto mt-7 max-w-2xl
                text-base leading-7
                text-slate-600
                sm:text-lg
                lg:mx-0
                dark:text-slate-400
              "
            >
              Building modern, responsive, and scalable web applications
              with clean code, thoughtful interfaces, and practical
              problem-solving.
            </p>

            {/* Buttons + Social */}
            <div
              className="
                mt-7 flex flex-col items-center gap-6
                sm:flex-row sm:justify-center
                lg:justify-start
              "
            >
              {/* Download */}
              <button
                onClick={handleDownloadClick}
                className="
                  group inline-flex items-center justify-center gap-2
                  rounded-xl
                  bg-indigo-600
                  px-7 py-3.5
                  font-semibold text-white
                  shadow-lg shadow-indigo-200/60
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-indigo-500
                  hover:shadow-xl
                  dark:shadow-indigo-950/40
                "
              >
                <Download
                  size={19}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                Download Resume
              </button>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/ANONTO96"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-xl
                    border border-slate-200
                    bg-white/80
                    text-slate-600
                    shadow-sm
                    backdrop-blur-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-indigo-200
                    hover:bg-indigo-50
                    hover:text-indigo-600
                    hover:shadow-md
                    dark:border-slate-800
                    dark:bg-slate-900/80
                    dark:text-slate-400
                    dark:hover:border-indigo-500/30
                    dark:hover:bg-indigo-500/10
                    dark:hover:text-indigo-300
                  "
                >
                  <Github size={21} />
                </a>

                <a
                  href="https://www.linkedin.com/in/tanjir-ul-anonto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-xl
                    border border-slate-200
                    bg-white/80
                    text-slate-600
                    shadow-sm
                    backdrop-blur-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:bg-blue-50
                    hover:text-blue-600
                    hover:shadow-md
                    dark:border-slate-800
                    dark:bg-slate-900/80
                    dark:text-slate-400
                    dark:hover:border-blue-500/30
                    dark:hover:bg-blue-500/10
                    dark:hover:text-blue-300
                  "
                >
                  <Linkedin size={21} />
                </a>

                <a
                  href="https://www.facebook.com/tanjir.anonto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-xl
                    border border-slate-200
                    bg-white/80
                    text-slate-600
                    shadow-sm
                    backdrop-blur-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-indigo-200
                    hover:bg-indigo-50
                    hover:text-indigo-600
                    hover:shadow-md
                    dark:border-slate-800
                    dark:bg-slate-900/80
                    dark:text-slate-400
                    dark:hover:border-indigo-500/30
                    dark:hover:bg-indigo-500/10
                    dark:hover:text-indigo-300
                  "
                >
                  <Facebook size={21} />
                </a>
              </div>
            </div>

            {/* Small status */}
            <div
              className="
                mt-6 flex items-center justify-center gap-2
                text-sm text-slate-500
                lg:justify-start
                dark:text-slate-500
              "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="
                    absolute inline-flex h-full w-full
                    animate-ping rounded-full
                    bg-emerald-400 opacity-75
                  "
                />
                <span
                  className="
                    relative inline-flex h-2.5 w-2.5
                    rounded-full bg-emerald-500
                  "
                />
              </span>

              Open to opportunities
            </div>
          </div>

          {/* Right Image */}
<div className="flex justify-center lg:justify-end">
  <div className="relative w-64 sm:w-72">
    {/* Glow behind image */}
    <div
      className="
        pointer-events-none absolute left-1/2 top-1/2
        h-64 w-64 -translate-x-1/2 -translate-y-1/2
        rounded-full
        bg-indigo-400/20
        blur-3xl
        sm:h-72 sm:w-72
        dark:bg-indigo-500/10
      "
    />

    {/* Decorative ring */}
    <div
      className="
        pointer-events-none absolute left-1/2 top-1/2
        h-64 w-64 -translate-x-1/2 -translate-y-1/2
        rounded-full
        border border-indigo-200/70
        sm:h-72 sm:w-72
        dark:border-indigo-500/20
      "
    />

    {/* Image container */}
    <div
      className="
        relative flex h-64 w-64
        items-center justify-center
        rounded-full
        border-8 border-white/90
        bg-linear-to-br
        from-indigo-100
        via-blue-50
        to-violet-100
        shadow-2xl
        transition-transform duration-500
        hover:-translate-y-2
        sm:h-72 sm:w-72
        dark:border-slate-800
        dark:from-indigo-950/80
        dark:via-slate-900
        dark:to-violet-950/60
      "
    >
      <img
        src={image}
        alt="Tanjir-ul Islam"
        className="
          h-full w-full
          rounded-full
          object-cover
          transition-transform duration-500
          hover:scale-[1.03]
        "
      />
    </div>

    {/* Floating badge */}
    <div
      className="
        absolute bottom-2 left-1/2
        -translate-x-1/2 translate-y-1/2
        whitespace-nowrap
        rounded-2xl
        border border-slate-200
        bg-white/90
        px-5 py-3
        text-center
        shadow-xl
        backdrop-blur-md
        dark:border-slate-800
        dark:bg-slate-900/90
      "
    >
      <p className="text-xs font-medium text-slate-500 dark:text-slate-500">
        Specializing in
      </p>

      <p
        className="
          mt-0.5 text-sm font-bold
          text-indigo-600
          dark:text-indigo-300
        "
      >
        Modern Web Development
      </p>
    </div>
  </div>
</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="
          absolute bottom-0 lg:bottom-10 left-1/2
          hidden -translate-x-1/2
          flex-col items-center gap-2
          text-slate-400
          transition-colors duration-300
          hover:text-indigo-500
          sm:flex
          dark:text-slate-600
          dark:hover:text-indigo-400
        "
      >
        <span className="text-xs font-medium tracking-wider">
          SCROLL
        </span>

        <ArrowDown
          size={17}
          className="animate-bounce"
        />
      </a>
    </section>
  );
};

export default Hero;