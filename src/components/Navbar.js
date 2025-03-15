import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Left Side: Profile Image + Name */}
          <div className="flex items-center space-x-3">
            <img 
              src="/murthy.jpg" 
              alt="Murthy" 
              className="w-12 h-12 rounded-full border-2 border-gray-300"
            />
            <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">M B S Murthy</h1>
          </div>

          {/* Right Side: Navigation Links */}
          <div className="space-x-6">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">About</a>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Skills</a>
            <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Experience</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Projects</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

