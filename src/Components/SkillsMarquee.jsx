import Marquee from "react-fast-marquee";

import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiPostman,
  SiNpm
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "HTML5", icon: SiHtml5 },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "Git", icon: SiGit },
  { name: "Postman", icon: SiPostman },
  { name: "NPM", icon: SiNpm }
];

export default function SkillsMarquee() {
  return (
    <div className="my-16 bg-white dark:bg-gray-900">
      <Marquee
        speed={70}
        pauseOnHover
        gradient
        gradientColor={[255, 255, 255]}
        className="dark:[--gradient-color:0,0,0]"
      >
        {skills.map((skill, i) => {
          const Icon = skill.icon;

          return (
            <div
              key={i}
              className="
              flex items-center gap-3 mx-5 px-5 py-3
              rounded-xl border
              border-neutral-200 dark:border-neutral-800
              bg-neutral-100 dark:bg-neutral-900/40
              text-neutral-700 dark:text-neutral-300
              hover:text-black dark:hover:text-white
              hover:border-neutral-400 dark:hover:border-neutral-600
              transition-all duration-300
              "
            >
              <Icon className="text-lg" />
              <span className="font-medium tracking-wide">
                {skill.name}
              </span>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}
