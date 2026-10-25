import { useState } from "react";
import {
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

import { useTheme } from "../hooks/useTheme";
import portfolioIcon from "../assets/icons8-portfolio-48.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
  className="mx-2 mt-1 md:mx-4 lg:mx-6 xl:mx-16 rounded-2xl
    fixed inset-x-0 top-0 z-50
    border-b border-slate-200/70
    bg-transparent
    shadow-sm
    backdrop-blur-xl
    transition-all duration-300

    dark:border-slate-800/70
    dark:bg-[#0b1220]/80
  "
>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-2.5"
          >
            <div
              className="
                flex h-9 w-9 items-center justify-center
                rounded-xl
                border border-indigo-400/20
                bg-indigo-500/10
                shadow-sm
                transition-all duration-300
                group-hover:-translate-y-0.5
                group-hover:border-indigo-400/40
                group-hover:bg-indigo-500/15
              "
            >
              <img
                src={portfolioIcon}
                alt="Portfolio"
                className="h-6 w-6 object-contain"
              />
            </div>

            <span
              className="
                text-xl font-extrabold tracking-tight
                text-slate-800
dark:text-white
                transition-colors duration-300
                group-hover:text-indigo-500
              "
            >
              Tanjir Ul Islam
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
  key={item.name}
  href={item.href}
  className="
    rounded-xl
    px-3.5 py-2
    text-sm font-medium
    text-slate-600
    transition-all duration-300
    hover:bg-indigo-50
    hover:text-indigo-600

    dark:text-slate-300
    dark:hover:bg-indigo-500/10
    dark:hover:text-indigo-300
  "
>
  {item.name}
</a>
            ))}

            {/* Divider */}
            <div className="mx-3 h-6 w-px bg-slate-700/70" />

            {/* Theme Toggle */}
            <button
  onClick={toggleTheme}
  aria-label={
    theme === "dark"
      ? "Switch to light mode"
      : "Switch to dark mode"
  }
  className="
    flex h-10 w-10 items-center justify-center
    rounded-xl
    border border-slate-200
    bg-white/70
    text-slate-600
    transition-all duration-300
    hover:-translate-y-0.5
    hover:border-indigo-200
    hover:bg-indigo-50
    hover:text-indigo-600

    dark:border-slate-700/70
    dark:bg-slate-900/70
    dark:text-slate-300
    dark:hover:border-indigo-500/30
    dark:hover:bg-indigo-500/10
    dark:hover:text-indigo-300
  "
>
  {theme === "dark" ? (
    <Sun size={19} className="text-amber-400" />
  ) : (
    <Moon size={19} className="text-slate-600" />
  )}
</button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl
                border border-white/10
                bg-white/5
                text-slate-400
                transition-all duration-300
                hover:bg-indigo-500/10
                hover:text-indigo-300
              "
            >
              {theme === "dark" ? (
                <Sun size={19} className="text-amber-400" />
              ) : (
                <Moon size={19} />
              )}
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl
                border border-white/10
                bg-white/5
                text-slate-400
                transition-all duration-300
                hover:bg-indigo-500/10
                hover:text-indigo-300
              "
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          overflow-hidden border-t border-white/5
          bg-white/95 backdrop-blur-xl
          transition-all duration-300
          dark:bg-[#0b1220]/95
          md:hidden
          ${
            isOpen
              ? "max-h-125 opacity-100 rounded-2xl"
              : "max-h-0 border-transparent opacity-0"
          }
        `}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
  flex items-center
  rounded-xl
  px-4 py-3
  text-sm font-medium
  text-slate-600
  transition-all duration-300
  hover:bg-indigo-50
  hover:pl-5
  hover:text-indigo-600

  dark:text-slate-300
  dark:hover:bg-indigo-500/10
  dark:hover:text-indigo-300
"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;