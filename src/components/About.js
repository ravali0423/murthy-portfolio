import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">About Me</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg text-center">
          I am M B S Murthy, a dedicated Oracle Integration Cloud Developer with expertise in designing 
          and implementing scalable cloud-based integrations. With over 4 years of experience, I have worked 
          on ERP Cloud, HCM Cloud, and SCM Cloud, helping businesses streamline their integration processes.
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg text-center">
          My expertise includes Oracle OIC, VBCS, SOAP & REST APIs, OAuth Authentication, Fault Handling, 
          and Presales Integration Solutions. I have a passion for automation and optimization, having 
          successfully automated MFTCS monitoring, saving hours of manual work.
        </p>
      </div>
    </section>
  );
};

export default About;
