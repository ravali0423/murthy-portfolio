import React from "react";

const experiences = [
  {
    title: "Senior Consultant",
    company: "Mastek",
    year: "May 2022 - Present",
    description: "Developed and extended VBCS applications, implemented ERP and SCM-based integrations, and delivered presales integration solutions with POCs for internal teams.",
  },
  {
    title: "Oracle Integration Cloud Developer",
    company: "Oracle",
    year: "Aug 2021 - May 2022",
    description: "Designed and developed complex integration flows for HCM and ERP Cloud. Created reusable components, implemented fault handling, and optimized existing integrations.",
  },
  {
    title: "Oracle Integration Cloud Developer",
    company: "PwC",
    year: "Dec 2020 - Aug 2021",
    description: "Built integrations using HCM and ERP Cloud. Worked with HDL adapters, implemented OAuth authentication, and created client-facing test cases.",
  },
  {
    title: "Oracle Integration Cloud Developer",
    company: "Accenture",
    year: "Oct 2019 - Dec 2020",
    description: "Developed and implemented OIC solutions for ERP, HCM, and SCM modules. Automated MFTCS monitoring, improving efficiency by 30%.",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">Experience</h2>
        <div className="mt-8 space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{exp.company} • {exp.year}</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
