import React from "react";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <div className="flex items-center justify-center py-6">
        <p className="text-gray-600 dark:text-gray-400">© 2024 M B S Murthy. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default App;
