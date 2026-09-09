/* eslint-disable no-unused-vars */
import {
  ArrowUp,
  Facebook,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/ANONTO96",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/tanjir-ul-anonto/",
      icon: Linkedin,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/tanjir.anonto/",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/tanjir_ul_islam/",
      icon: Instagram,
    },
  ];

  return (
    <footer
      className="
        relative overflow-hidden
        border-t border-slate-800
        bg-[#0b1220]
        text-white
      "
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute -left-32 -top-32
            h-72 w-72 rounded-full
            bg-indigo-500/10 blur-3xl
          "
        />

        <div
          className="
            absolute -right-32 bottom-0
            h-80 w-80 rounded-full
            bg-blue-500/10 blur-3xl
          "
        />

        <div
          className="
            absolute left-1/2 top-1/2
            h-56 w-56 -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-violet-500/5 blur-3xl
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div
          className="
            flex flex-col items-center
            justify-between gap-10
            md:flex-row
          "
        >
          {/* Intro */}
          <div className="max-w-xl text-center md:text-left">
            <div
              className="
                mb-4 inline-flex items-center
                rounded-full border
                border-indigo-500/20
                bg-indigo-500/10
                px-4 py-2
                text-sm font-semibold
                text-indigo-300
              "
            >
              Let's Connect
            </div>

            <h3
              className="
                text-2xl font-extrabold
                tracking-tight
                text-white
                sm:text-3xl
              "
            >
              Let&apos;s build something
              <span
                className="
                  ml-2
                  bg-linear-to-r
                  from-blue-400
                  via-indigo-400
                  to-violet-400
                  bg-clip-text
                  text-transparent
                "
              >
                meaningful.
              </span>
            </h3>

            <p
              className="
                mt-4 max-w-lg
                text-sm leading-7
                text-slate-400
                sm:text-base
              "
            >
              Feel free to reach out for collaborations, opportunities,
              project discussions, or simply a friendly hello.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="
                  group flex h-12 w-12
                  items-center justify-center
                  rounded-xl
                  border border-slate-800
                  bg-slate-900/70
                  text-slate-400
                  shadow-sm
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-indigo-500/30
                  hover:bg-indigo-500/10
                  hover:text-indigo-300
                  hover:shadow-lg
                  hover:shadow-indigo-950/30
                "
              >
                <Icon
                  size={21}
                  className="
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-linear-to-r from-transparent via-slate-700 to-transparent" />

        {/* Bottom */}
        <div
          className="
            flex flex-col items-center
            justify-between gap-5
            text-center
            sm:flex-row sm:text-left
          "
        >
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://www.canva.com/design/DAGi0v7ULpM/v_PYCv3QeXWtJ79JVIJdSQ/view?utm_content=DAGi0v7ULpM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7580b5a492"
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-medium
                text-slate-300
                transition-colors duration-300
                hover:text-indigo-400
              "
            >
              Tanjir-Ul Islam Anonto
            </a>{" "}
            <span className="mx-1 text-slate-700">•</span>
            All rights reserved.
          </p>

          {/* Back to top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="
              group inline-flex items-center gap-2
              rounded-xl
              border border-slate-800
              bg-slate-900/70
              px-4 py-2.5
              text-sm font-medium
              text-slate-400
              transition-all duration-300
              hover:-translate-y-1
              hover:border-indigo-500/30
              hover:bg-indigo-500/10
              hover:text-indigo-300
            "
          >
            Back to top
            <ArrowUp
              size={16}
              className="
                transition-transform duration-300
                group-hover:-translate-y-0.5
              "
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;