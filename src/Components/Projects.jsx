import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  Layers3,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

import Project1 from "../assets/ScholarX.jpg";
import Project2 from "../assets/Medicare.jpg";
import Project3 from "../assets/Project-IO.jpg";
import Project4 from "../assets/Smart Office Equipment Dashboard.png";
import Project5 from "../assets/CS-Ticket-System.jpg";
import Project6 from "../assets/Swift-Cart.jpg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  
const projects = [
  {
    title: "ScholarX – AI-Powered Scholarship Guidance & Eligibility Analysis",
    image: Project1,
    category: "AI • Full Stack",
  featured: true,
    description:
      "An AI-powered scholarship guidance platform that helps students discover relevant opportunities and analyze their eligibility based on academic, personal, and financial profiles.",
    fullDescription:
      "ScholarX is an AI-powered scholarship guidance and eligibility analysis system built to simplify the process of finding and evaluating scholarship opportunities. The platform combines a modern MERN-based web application with Python-powered processing to analyze student profiles against scholarship requirements. It provides explainable eligibility results, highlights passed, review, and failed requirements, identifies missing criteria, and helps students understand why they may or may not qualify for an opportunity.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "Flask",
      "MySQL",
      "JWT",
      "Tailwind CSS",
      "DaisyUI",
    ],
    liveLink: "https://scholarx-web.vercel.app/",
    githubLink:
      "https://github.com/ANONTO96/ScholarX--Explainable-AI-based-Scholarship-Guidance-and-Eligibility-Analysis-System",
    challenges:
      "The main challenge was designing a flexible eligibility analysis engine capable of interpreting different scholarship requirements and comparing them against normalized student profile data. Handling different rule structures, mandatory and preferred requirements, academic thresholds, English-language scores, work experience, study destinations, and additional requirements required careful rule evaluation and data normalization.",
    feature:
      "ScholarX provides scholarship discovery, student profile analysis, explainable eligibility scoring, requirement-by-requirement status, missing criteria identification, scholarship details, personalized guidance, and an AI chatbot experience. The system evaluates multiple eligibility factors and presents the results as passed, review, or not eligible rather than simply returning a single score.",
  },

  {
    title: "Medicare – Smart Doctor Appointment Booking System",
    image: Project2,
    category: "Healthcare • Web App",
  featured: true,
    description:
      "A responsive doctor appointment booking platform that helps patients explore doctors by specialty, check available appointment slots, and manage bookings through a Firebase-powered system.",
    fullDescription:
      "Medicare is a doctor appointment booking web application built with React, Tailwind CSS, DaisyUI, and Firebase. It allows users to browse doctor profiles, explore medical specialties, view doctor details, and book appointments using available 30-minute time slots. Firebase Authentication supports user authentication, while Cloud Firestore stores appointment data. The application also includes appointment management functionality and an admin panel for managing appointments, providing a streamlined experience for patients and administrators.",
    tech: [
      "React",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase Authentication",
      "Cloud Firestore",
      "React Router",
    ],
    liveLink:
      "https://medicare-smart-doctor-appointment-web.netlify.app/",
    githubLink:
      "https://github.com/ANONTO96/MEDICARE-Smart-Doctor-Appointment-Management-System",
    challenges:
      "The main challenge was implementing a reliable appointment-booking workflow with doctor-specific schedules and 30-minute time slots. Integrating Firebase Authentication and Cloud Firestore, organizing appointment data, supporting appointment management, and building a responsive interface for patients and administrators required careful state management and data handling.",
    feature:
      "Medicare provides doctor profiles, specialty-based browsing, doctor detail pages, Firebase Authentication, appointment booking with available 30-minute slots, Firestore-based appointment storage, appointment cancellation and management, booking confirmation notifications, and an admin panel for managing appointments.",
  },

  {
    title: "Project IO – Web Development Project Showcase",
    image: Project3,
    category: "Frontend • Web",
  featured: true,
    description:
      "A centralized project showcase platform designed to present web development projects, their technologies, descriptions, and details through a clean and responsive interface.",
    fullDescription:
      "Project IO is a portfolio-style web application created to organize and showcase web development projects in one place. Visitors can explore different applications, view detailed project information, understand the technologies used, and navigate between project pages through a clean and responsive interface. The platform demonstrates practical use of React, client-side routing, Tailwind CSS, DaisyUI, and reusable UI components.",
    tech: [
      "React",
      "Vite",
      "React Router DOM",
      "Tailwind CSS",
      "DaisyUI",
      "React Icons",
      "React Toastify",
    ],
    liveLink: "https://project-io-webapp.netlify.app/",
    githubLink: "https://github.com/ANONTO96/Project-IO",
    challenges:
      "The key challenge was creating a consistent project presentation system that could handle different types of applications while keeping the interface responsive and easy to navigate. Organizing project information, building reusable components, implementing client-side routing, and maintaining a clean UI across different screen sizes were important parts of the development process.",
    feature:
      "The application provides a centralized collection of projects, detailed project views, technology-stack information, responsive layouts, smooth navigation between pages, and toast notifications for user interactions.",
  },

  {
    title: "Smart Office Device Management System – IUT Hackathon at Techathon Nationals & Rover Summit 2026",
    image: Project4,
    category: "IoT • Full Stack",
  featured: false,
    description:
      "A real-time smart office monitoring and device management system that integrates a React dashboard, FastAPI backend, Discord bot, and ESP32-compatible IoT architecture to monitor and control office devices.",
    fullDescription:
      "Developed for the IUT CSE TechFest 2026 Hackathon, the Smart Office Device Management System simulates and monitors an office environment through a centralized FastAPI backend. It synchronizes device states across a React dashboard, a Discord bot, and ESP32-compatible IoT devices. The system monitors 18 smart devices across three rooms, including lights, fans, and doors. WebSocket communication delivers real-time updates, while runtime, power consumption, and daily energy usage are calculated from device activity. The Discord bot supports slash commands for monitoring and controlling devices, along with automatic after-hours alerts when devices remain switched on.",
    tech: [
      "React",
      "Vite",
      "Python",
      "FastAPI",
      "WebSockets",
      "Pydantic",
      "Uvicorn",
      "Tailwind CSS",
      "Axios",
      "Discord.py",
      "ESP32",
      "Arduino",
      "Wokwi",
    ],
    liveLink: "",
    githubLink:
      "https://github.com/ANONTO96/IUT-Hackathon-Preliminary-Smart-Office-Device-Management-System",
    challenges:
      "The main challenge was maintaining a consistent device state across multiple clients while supporting real-time monitoring and control. The centralized device state manager, WebSocket broadcasting, runtime and energy calculations, REST API integration, Discord bot communication, and ESP32-compatible device control needed to work together reliably without state inconsistencies.",
    feature:
      "The system features an interactive office floor layout, live device status monitoring, room-wise statistics, current power consumption, daily energy usage, REST API device control, real-time WebSocket updates, Discord slash commands, automatic after-hours alerts, and an ESP32-compatible IoT architecture with Wokwi simulation support.",
  },

  {
    title: "CS Ticket – Customer Service Ticket Management System",
    image: Project5,
    category: "Web Application",
  featured: false,
    description:
      "A responsive customer service ticket management application designed to organize support requests through a structured ticketing workflow.",
    fullDescription:
      "CS Ticket is a responsive customer service ticket management system built to demonstrate a practical support-request workflow. The application allows users to create and manage customer service tickets while presenting ticket information in an organized interface. It focuses on making support requests easier to track, understand, and manage through a clean dashboard-oriented experience.",
    tech: [
      "React",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "DaisyUI",
      "React Router",
    ],
    liveLink:
      "https://customer-service-ticket-system-projct.netlify.app/",
    githubLink: "https://github.com/ANONTO96/Ticket-System",
    challenges:
      "The main challenge was designing a clear ticket-management workflow while keeping the interface simple and responsive. Managing ticket states, presenting customer issues clearly, handling user interactions, and maintaining a consistent dashboard experience across devices required careful component and state organization.",
    feature:
      "The system provides a structured customer support workflow with ticket creation, ticket information management, status-based organization, interactive UI elements, and a responsive interface for handling customer service requests.",
  },

  {
    title: "SwiftCart – One-Stop Fashion & Clothing Solution",
    image: Project6,
    category: "Frontend • E-Commerce",
  featured: false,
    description:
      "A one-stop fashion and clothing platform focused on browsing products, shopping interactions, and a responsive user experience.",
    fullDescription:
      "SwiftCart is a one-stop solution for fashion and clothing shops, offering a seamless platform for browsing, purchasing, and managing apparel. Store owners can showcase their collections, manage inventory, and track orders, while customers enjoy a smooth shopping experience with curated recommendations, secure payments, and order tracking. The app focuses on responsive design, fast performance, and intuitive UI to enhance user engagement.",
    tech: ["Vanilla JS", "DaisyUI", "TailwindCSS", "HTML"],
    liveLink: "https://swiftcart2026.netlify.app/",
    githubLink: "https://github.com/ANONTO96/swiftCart",
    challenges:
      "Keeping the interface simple and responsive across devices. Ensuring secure data management while maintaining fast load times and smooth interactions, especially with a large product catalog.",
    feature:
      "Users can browse products, add items to the cart, and complete basic checkout.",
  },
];


  // Close modal with Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="
        relative overflow-hidden
        bg-slate-50 pt-24
        transition-colors duration-500
        dark:bg-[#0b1220]
      "
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute -left-32 top-24 h-72 w-72 rounded-full
            bg-indigo-300/20 blur-3xl
            dark:bg-indigo-500/10
          "
        />

        <div
          className="
            absolute -right-32 bottom-20 h-80 w-80 rounded-full
            bg-blue-300/20 blur-3xl
            dark:bg-blue-500/10
          "
        />

        <div
          className="
            absolute left-1/2 top-1/3 h-56 w-56
            -translate-x-1/2 rounded-full
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
            Selected Work
          </div>

          <h2
            className="
              text-4xl font-extrabold tracking-tight
              text-slate-900
              sm:text-5xl
              dark:text-white
            "
          >
            Projects
          </h2>

          <div
            className="
              mx-auto mt-5 h-1 w-16 rounded-full
              bg-linear-to-r from-blue-500 via-indigo-500 to-violet-500
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
            A selection of projects where I combine clean interfaces,
            practical problem-solving, and modern web technologies.
          </p>
        </div>

        {/* =========================
            PROJECT GRID
        ========================== */}
        <div
          className="
            grid grid-cols-1 gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {projects.map((project, index) => {
            const isFeatured = project.featured;

            return (
              <article
                key={project.title}
                className={`
                  group relative flex h-full flex-col overflow-hidden
                  rounded-3xl
                  border
                  bg-white/90
                  shadow-sm
                  backdrop-blur-sm
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                  dark:bg-slate-900/80
                  
                  ${
                    isFeatured
                      ? `
                        border-indigo-200/80
                        shadow-indigo-100/60
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
                {/* =========================
                    IMAGE
                ========================== */}
                <div
                  className={`
                    relative overflow-hidden
                    h-56
                  `}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      h-full w-full object-cover
                      transition duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Image gradient */}
                  <div
                    className="
                      absolute inset-0
                      bg-linear-to-t
                      from-slate-950/70 via-slate-950/10 to-transparent
                      opacity-70
                    "
                  />

                  {/* Project number */}
                  <div
                    className="
                      absolute left-5 top-5
                      flex h-10 w-10 items-center justify-center
                      rounded-xl
                      border border-white/20
                      bg-slate-950/50
                      text-sm font-bold text-white
                      shadow-lg backdrop-blur-md
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Featured badge */}
                  {isFeatured && (
                    <div
                      className="
                        absolute right-5 top-5
                        inline-flex items-center gap-2
                        rounded-full
                        border border-white/20
                        bg-indigo-600/90
                        px-3 py-1.5
                        text-xs font-bold text-white
                        shadow-lg backdrop-blur-md
                      "
                    >
                      <Sparkles size={13} />
                      Featured Project
                    </div>
                  )}

                  {/* Hover action */}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="
                      absolute bottom-5 right-5
                      flex h-11 w-11
                      translate-y-3 items-center justify-center
                      rounded-full
                      bg-white text-slate-900
                      opacity-0 shadow-xl
                      transition-all duration-300
                      hover:bg-indigo-50
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight size={20} />
                  </button>
                </div>

                {/* =========================
                    CARD CONTENT
                ========================== */}
                <div className="flex flex-1 flex-col p-6">

                  {/* Category */}
                  <div
                    className="
                      mb-3 flex items-center gap-2
                      text-xs font-bold uppercase tracking-[0.14em]
                      text-indigo-500
                      dark:text-indigo-400
                    "
                  >
                    <Code2 size={14} />
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3
                    className={`
                      font-bold leading-snug
                      text-slate-900
                      dark:text-white
                      ${
                        isFeatured
                          ? "text-2xl"
                          : "text-xl"
                      }
                    `}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-3 line-clamp-3
                      text-sm leading-6
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="my-5 flex flex-wrap gap-2">
                    {project.tech.map(
                      (tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-lg
                            border border-slate-200
                            bg-slate-50
                            px-2.5 py-1
                            text-xs font-medium
                            text-slate-600
                            transition
                            group-hover:border-indigo-200
                            group-hover:text-indigo-600
                            dark:border-slate-700
                            dark:bg-slate-800/70
                            dark:text-slate-300
                            dark:group-hover:border-indigo-500/30
                            dark:group-hover:text-indigo-300
                          "
                        >
                          {tech}
                        </span>
                      )
                    )}

                  </div>

                  {/* Bottom Actions */}
                  <div
                    className="
                      mt-auto flex items-center gap-3
                      border-t border-slate-100
                      pt-5
                      dark:border-slate-800
                    "
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="
                        inline-flex flex-1 items-center
                        justify-center gap-2
                        rounded-xl
                        bg-linear-to-r
                        from-indigo-600 to-blue-600
                        px-4 py-2.5
                        text-sm font-semibold text-white
                        shadow-sm
                        transition-all duration-300
                        hover:-translate-y-0.5
                        hover:shadow-lg
                        hover:shadow-indigo-500/20
                      "
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="
                        inline-flex items-center justify-center
                        gap-2
                        rounded-xl
                        border border-slate-200
                        bg-white
                        px-4 py-2.5
                        text-sm font-semibold
                        text-slate-700
                        transition-all duration-300
                        hover:-translate-y-0.5
                        hover:border-indigo-200
                        hover:text-indigo-600
                        dark:border-slate-700
                        dark:bg-slate-800/70
                        dark:text-slate-200
                        dark:hover:border-indigo-500/30
                        dark:hover:text-indigo-300
                      "
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github size={17} />
                      <span className="hidden sm:inline">
                        Code
                      </span>
                    </a>
                  </div>

                  {/* Case study button */}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="
                      mt-3 flex w-full items-center
                      justify-center gap-2
                      rounded-xl
                      px-4 py-2
                      text-sm font-semibold
                      text-slate-500
                      transition
                      hover:text-indigo-600
                      dark:text-slate-400
                      dark:hover:text-indigo-300
                    "
                  >
                    View case study
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          PROJECT MODAL / CASE STUDY
      ====================================================== */}
      {selectedProject && (
        <div
          className="
            fixed inset-0 z-100
            flex items-center justify-center
            bg-slate-950/70
            p-4
            backdrop-blur-md
            sm:p-6
          "
          onMouseDown={() => setSelectedProject(null)}
        >
          <div
            className="
              relative
              flex max-h-[92vh]
              w-full max-w-4xl
              flex-col overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white
              shadow-2xl
              dark:bg-[#111827]
            "
            onMouseDown={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="
                absolute right-4 top-4 z-20
                flex h-10 w-10 items-center justify-center
                rounded-full
                border border-white/20
                bg-slate-950/60
                text-white
                shadow-lg
                backdrop-blur-md
                transition
                hover:scale-105
                hover:bg-slate-950/80
              "
              aria-label="Close project details"
            >
              <X size={19} />
            </button>

            {/* Modal Image */}
            <div className="relative h-56 shrink-0 sm:h-72">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="h-full w-full object-cover"
              />

              <div
                className="
                  absolute inset-0
                  bg-linear-to-t
                  from-slate-950/90 via-slate-950/20 to-transparent
                "
              />

              <div className="absolute bottom-6 left-6 right-16 sm:left-8 sm:bottom-8">
                <div
                  className="
                    mb-3 inline-flex items-center gap-2
                    rounded-full
                    border border-white/20
                    bg-white/10
                    px-3 py-1.5
                    text-xs font-semibold text-white
                    backdrop-blur-md
                  "
                >
                  <Layers3 size={13} />
                  Project Case Study
                </div>

                <h3
                  className="
                    text-2xl font-extrabold
                    leading-tight text-white
                    sm:text-3xl
                  "
                >
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto">
              <div className="p-6 sm:p-8">

                {/* Description */}
                <div className="mb-8">
                  <div
                    className="
                      mb-3 flex items-center gap-2
                      text-sm font-bold
                      text-indigo-600
                      dark:text-indigo-400
                    "
                  >
                    <Sparkles size={16} />
                    About the project
                  </div>

                  <p
                    className="
                      text-sm leading-7
                      text-slate-600
                      sm:text-base
                      dark:text-slate-300
                    "
                  >
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Features + Challenges */}
                <div className="grid gap-5 md:grid-cols-2">

                  {/* Features */}
                  <div
                    className="
                      rounded-2xl
                      border border-slate-200
                      bg-slate-50
                      p-5
                      dark:border-slate-800
                      dark:bg-slate-900/70
                    "
                  >
                    <div
                      className="
                        mb-3 flex items-center gap-2
                        font-bold text-slate-900
                        dark:text-white
                      "
                    >
                      <span
                        className="
                          flex h-8 w-8 items-center justify-center
                          rounded-lg
                          bg-emerald-100
                          text-emerald-600
                          dark:bg-emerald-500/10
                          dark:text-emerald-400
                        "
                      >
                        <CheckCircle2 size={17} />
                      </span>

                      Key Features
                    </div>

                    <p
                      className="
                        text-sm leading-6
                        text-slate-600
                        dark:text-slate-400
                      "
                    >
                      {selectedProject.feature}
                    </p>
                  </div>

                  {/* Challenges */}
                  <div
                    className="
                      rounded-2xl
                      border border-slate-200
                      bg-slate-50
                      p-5
                      dark:border-slate-800
                      dark:bg-slate-900/70
                    "
                  >
                    <div
                      className="
                        mb-3 flex items-center gap-2
                        font-bold text-slate-900
                        dark:text-white
                      "
                    >
                      <span
                        className="
                          flex h-8 w-8 items-center justify-center
                          rounded-lg
                          bg-amber-100
                          text-amber-600
                          dark:bg-amber-500/10
                          dark:text-amber-400
                        "
                      >
                        <Zap size={17} />
                      </span>

                      Challenges
                    </div>

                    <p
                      className="
                        text-sm leading-6
                        text-slate-600
                        dark:text-slate-400
                      "
                    >
                      {selectedProject.challenges}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-8">
                  <div
                    className="
                      mb-4 flex items-center gap-2
                      text-sm font-bold
                      text-slate-900
                      dark:text-white
                    "
                  >
                    <Code2 size={17} className="text-indigo-500" />
                    Technologies Used
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-xl
                          border border-indigo-100
                          bg-indigo-50
                          px-3 py-2
                          text-xs font-semibold
                          text-indigo-700
                          dark:border-indigo-500/20
                          dark:bg-indigo-500/10
                          dark:text-indigo-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Actions */}
                <div
                  className="
                    mt-8 flex flex-col gap-3
                    border-t border-slate-200
                    pt-6
                    sm:flex-row sm:justify-end
                    dark:border-slate-800
                  "
                >
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center
                      justify-center gap-2
                      rounded-xl
                      border border-slate-200
                      bg-white
                      px-5 py-3
                      text-sm font-semibold
                      text-slate-700
                      transition
                      hover:border-indigo-200
                      hover:text-indigo-600
                      dark:border-slate-700
                      dark:bg-slate-800
                      dark:text-slate-200
                      dark:hover:border-indigo-500/30
                      dark:hover:text-indigo-300
                    "
                  >
                    <Github size={17} />
                    View Source Code
                  </a>

                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center
                      justify-center gap-2
                      rounded-xl
                      bg-linear-to-r
                      from-indigo-600 to-blue-600
                      px-5 py-3
                      text-sm font-semibold text-white
                      shadow-lg
                      shadow-indigo-500/20
                      transition
                      hover:-translate-y-0.5
                      hover:shadow-xl
                    "
                  >
                    <ExternalLink size={17} />
                    Visit Live Project
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;