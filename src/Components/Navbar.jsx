import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { Menu, X, Moon, Sun } from "lucide-react";
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
    <nav className="fixed w-full backdrop-blur-xs bg-transparent shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img className="w-8 h-8 mb-1 mr-2 " src={portfolioIcon} alt="logo" />
            <span className="text-2xl font-bold text-white
 hover:text-indigo-300 align-middle">
              Portfolio
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/90 dark:text-gray-200 hover:text-indigo-700 dark:hover:text-orange-300 hover:bg-indigo-100 dark:hover:bg-gray-700 rounded-3xl px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}

            {/* Dark Mode Toggle (Desktop) */}
            <button
              onClick={toggleTheme}

              className="p-2 rounded-lg hover:bg-gray-600 transition"
            >
              {theme === "dark" ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-white" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-indigo-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-transparent dark:bg-gray-900 shadow-lg py-4">
          <div className="px-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-white dark:text-gray-200 font-medium hover:text-indigo-700 dark:hover:text-orange-300 hover:bg-indigo-100 dark:hover:bg-gray-700 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* Dark Mode Toggle (Mobile) */}
            <button
              onClick={toggleTheme}

              className="w-full flex justify-center items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
