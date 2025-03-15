import React from "react";

const projects = [
  {
    title: "OIC Developer - Accenture",
    description: "Developed and implemented Oracle Integration Cloud (OIC) solutions for ERP, HCM, and SCM modules. Automated MFTCS monitoring, saving two hours of daily work.",
    techStack: "Oracle OIC, ERP Cloud, FTP, DB, SOAP, REST, Power BI",
  },
  {
    title: "OIC Developer - PwC",
    description: "Designed and developed integrations using HDL and HCM adapters. Implemented OAuth authentication for VBCS BO security and created test cases for client demonstrations.",
    techStack: "Oracle OIC, HDL, HCM Cloud, OAuth, VBCS",
  },
  {
    title: "OIC Developer - Oracle",
    description: "Developed complex integration flows for HCM and ERP. Designed reusable components and implemented counters, fault handling, and test cases for various integrations.",
    techStack: "Oracle OIC, HCM Cloud, ERP Cloud, Fault Handling",
  },
  {
    title: "Senior Consultant - Mastek",
    description: "Developed and extended VBCS applications, implemented ERP and SCM-based integrations, and delivered presales integration solutions with POCs for internal teams.",
    techStack: "Oracle OIC, ERP Cloud, SCM Cloud, VBCS, Presales Integrations",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">Projects</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{project.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Tech Stack: {project.techStack}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
