import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">About Me</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg text-center">
          I am <strong>M B S Murthy</strong>, an experienced <strong>Oracle Integration Cloud Developer</strong> with expertise in <strong>ERP Cloud, HCM Cloud, and SCM Cloud</strong>.
          Over the years, I have worked with top companies like <strong>Accenture, PwC, Oracle, and Mastek</strong>, helping businesses streamline cloud-based integrations.
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg text-center">
          My skills include developing and implementing <strong>OIC integrations, fault handling, REST & SOAP APIs, and VBCS applications.</strong>
          I specialize in designing high-performance integration flows that improve efficiency and automation.
        </p>
      </div>
    </section>
  );
};
export default About;
