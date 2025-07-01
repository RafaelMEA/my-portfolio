import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Facebook } from 'lucide-react';
import profile_pic from '../assets/profile_pic.png';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Home: React.FC<HeroProps> = ({ setActiveSection }) => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('about');
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl">
              <img
                src={profile_pic}
                alt="Rafael Martin Aquino"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Rafael Martin
            <span className="block text-blue-600 dark:text-blue-400">Aquino</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
            Software Developer
          </p>

          <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-8">
            <MapPin size={20} className="mr-2" />
            <span>Baguio City, Philippines</span>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          I'm a passionate software developer who loves creating efficient, maintainable code and building user-focused applications. I enjoy tackling complex problems, learning new technologies, and turning creative ideas into functional solutions that make a difference.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.facebook.com/paeengski"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 dark:bg-slate-700 text-white rounded-full hover:bg-gray-800 dark:hover:bg-slate-600 transition-colors duration-200"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://github.com/RafaelMEA"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 dark:bg-slate-700 text-white rounded-full hover:bg-gray-800 dark:hover:bg-slate-600 transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-martin-aquino-17330b1a5"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rafaelmartineaquino@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;