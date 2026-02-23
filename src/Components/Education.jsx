import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Sc. Honors in Computer Science Engineering (Prof. Honors)",
      institution: "National University of Bangladesh (Institute: Tejgaon College)",
      GPA: "CGPA : soon",
      year: "2022 - 2025",
      description: "I'm studying Computer Science and Engineering, where I've built a strong foundation in programming, data structures, algorithms, databases, networks, and software engineering—sharpening my problem-solving skills and real-world application development.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "BCIC College",
      GPA: "GPA : 5.00",
      year: "2018 - 2020",
      description: "I completed my HSC in Science with a GPA of 5.00, gaining strong analytical and technical skills through subjects like Mathematics, Physics, Chemistry, Biology, and ICT.",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Ahasania Mission School and College",
      GPA: "GPA : 5.00",
      year: "2016 - 2018",
      description: "I achieved a GPA of 5.00 in SSC (Science), building a solid foundation in Mathematics, Physics, Chemistry, Biology, and ICT, which fueled my passion for technology.",
    },
  ];

  return (
    <section id="education" className="pt-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-200">Education</h2>
          <div className="mt-2 h-1 w-20 bg-purple-700 dark:bg-indigo-500 mx-auto"></div>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-4 border-purple-600 dark:border-indigo-400 ml-6">
          {education.map((edu, index) => (
            <div key={index} className="mb-10 ml-6">
              {/* Icon */}
              <div className="absolute -left-6 w-12 h-12 bg-purple-100 dark:bg-indigo-300 rounded-full flex items-center justify-center">
                <GraduationCap size={24} className="text-purple-700 dark:text-indigo-800" />
              </div>

              {/* Education Details */}
              <div className="bg-gray-50 dark:bg-gray-800 dark:hover:bg-mist-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">{edu.degree}</h3>
                <p className="text-purple-700 dark:text-indigo-400 font-medium">{edu.institution}</p>
                <p className="text-gray-500 dark:text-gray-400 mt-1">{edu.GPA}</p>
                <p className="text-gray-500 dark:text-gray-400 mt-1">Year : {edu.year}</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
