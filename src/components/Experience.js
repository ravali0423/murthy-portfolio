import React from "react";

const experiences = [
  {
    title: "Senior Consultant",
    company: "Mastek",
    year: "Dec 2023 - Present",
    description: "Developed and extended VBCS applications, implemented ERP and SCM-based integrations, and delivered presales integration solutions with POCs for internal teams.",
  },
  {
    title: "Cloud Consultant",
    company: "Oracle",
    year: " Feb 2022 - Dec 2023",
    description: "Developed complex integration flow patterns, built reusable Common Framework Components, handled fault management, and implemented HCM & HDL-driven integrations for enterprise clients.",
  },
  {
    title: "Associate 2",
    company: "PwC",
    year: "Sep 2021 - Feb 2022",
    description: "Built scheduled & app-driven integrations, developed HCM & HDL-based flows, and implemented OAuth security for VBCS BO.",
  },
  {
    title: "Application Development Associate",
    company: "Accenture",
    year: "Nov 2018 - Aug 2021",
    description: "Designed and implemented scheduled integrations, migrated legacy systems, automated MFTCS monitoring, and developed ERP, FTP, DB, SOAP, and REST-based integrations. Extracted and transformed data for Oracle Autonomous Data Warehouse and created Power BI visualizations.",
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
