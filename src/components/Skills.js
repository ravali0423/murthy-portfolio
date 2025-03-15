import React from "react";

const skills = [
  "Oracle Integration Cloud (OIC)",
  "ERP Cloud",
  "HCM Cloud",
  "SCM Cloud",
  "VBCS (Visual Builder Cloud Service)",
  "REST & SOAP APIs",
  "OAuth Authentication",
  "FTP & Database Integrations",
  "Fault Handling & Error Logging",
  "Power BI",
  "MFTCS Monitoring & Automation"
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">My Skills</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md text-center">
              <p className="text-gray-900 dark:text-white font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
