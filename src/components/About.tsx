import React from "react";
import { GraduationCap, Code, Hammer, BookOpen } from "lucide-react";

const About: React.FC = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Computer Science Graduate",
      description:
        "Background in software development, software engineering, and programming from the University of Baguio",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Project Experience",
      description:
        "Built real-world apps using React.js, Vue.js, Node.js, Laravel, Express.js, MySQL, and Supabase.",
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Practical Developer",
      description:
        "Worked on inventory, e-commerce, blogging, and booking systems as part of academic and internship work",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Self-Driven Learner",
      description:
        "Learned new tools and solved problems independently using documentation and testing",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I’m a Computer Science graduate with experience in software
            development. I build backend systems with Java, Python, Express.js,
            Laravel, and PHP. I also develop user interfaces using HTML, CSS,
            JavaScript, React, Vue, and React Native. I focus on writing clean
            code, solving problems, and building fast, reliable applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              About Me
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I graduated with a degree in Computer Science from the
                University of Baguio. Before that, I studied ICT with a focus on
                animation at the University of the Cordilleras, which is where I
                was first introduced to programming. Since then, I’ve been more
                interested in building things with code than animating them.
              </p>
              <p>
                I’ve built web and mobile apps as part of school projects and
                internships—mostly using React, Node.js, PHP (Laravel), and
                MySQL. These include an inventory system for Baguio City’s Smart
                City project, an mobile and web e-commerce platform for farmers,
                and a blog and appointment system.
              </p>
              <p>
                I prefer working on both backend and frontend, depending on the
                project. I’m looking to join a team where I can contribute to
                real-world applications, work with modern tools, and keep
                learning as a developer.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            What I Bring as a Junior Developer
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Fresh Perspective & Modern Skills I bring up-to-date knowledge of
            current development practices, modern frameworks, and industry
            standards. My recent education combined with hands-on project
            experience means I'm familiar with the latest tools and
            methodologies that drive today's tech landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
