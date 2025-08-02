import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook } from "lucide-react";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "rafaelmartineaquino@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=rafaelmartineaquino@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+63 912 410 7730",
      href: "tel:+639124107730",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Baguio City, Philippines",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-6 h-6" />,
      label: "Facebook",
      href: "https://www.facebook.com/paeengski",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/RafaelMEA",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rafael-martin-aquino-17330b1a5",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm actively seeking new opportunities and would love to hear from
            potential employers, recruiters, or anyone interested in discussing
            technology and development.
          </p>
        </div>

        <div className="gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Information */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 relative pb-4">
              Let's Connect
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></span>
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                    {item.icon}
                  </div>
                  <div className="ml-5 flex-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-words"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-gray-900 dark:text-white">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 dark:border-slate-700 pt-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Follow Me
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gray-50 dark:bg-slate-700 rounded-xl flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-600 hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    aria-label={`Visit my ${link.label} profile`}
                  >
                    <span className="text-2xl">{link.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative group bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-10 overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="p-2.5 bg-white/10 rounded-lg mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M12 18h.01"
                    />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-white">
                  Open to Opportunities
                </h4>
              </div>
              <p className="text-blue-100 text-lg leading-relaxed max-w-4xl">
                I'm actively seeking{" "}
                <span className="font-semibold text-white">
                  junior to mid-level developer positions
                </span>{" "}
                where I can contribute to innovative projects while continuing
                to grow my skills. I'm particularly interested in collaborative
                environments that value clean code, continuous learning, and
                making a positive impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
