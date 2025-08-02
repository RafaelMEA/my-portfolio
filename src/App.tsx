import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-200">
        <Header
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <main>
          <Home setActiveSection={setActiveSection} />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <footer className="bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  &copy; {new Date().getFullYear()} Rafael Martin Aquino. All
                  rights reserved.
                </p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="#home"
                  className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection("home");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Back to top ↑
                </a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-slate-800">
              <p className="text-center text-xs text-gray-500 dark:text-gray-500">
                Built with React, TypeScript, and Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
