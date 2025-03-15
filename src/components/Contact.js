import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">Contact Me</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg text-center">
          Feel free to reach out for collaborations, job opportunities, or technical discussions!
        </p>
        
        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-800 dark:text-white font-semibold">📧 Email:</p>
          <p className="text-gray-700 dark:text-gray-300">murthymukkavilli2@gmail.com</p>

          <p className="text-lg text-gray-800 dark:text-white font-semibold mt-4">💼 LinkedIn:</p>
          <a
            href="https://www.linkedin.com/in/murthymukkavilli/hy" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline"
          >
            https://www.linkedin.com/in/murthymukkavilli/
          </a>

          <p className="text-lg text-gray-800 dark:text-white font-semibold mt-4">📞 Phone:</p>
          <p className="text-gray-700 dark:text-gray-300">+91 9515441485</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
