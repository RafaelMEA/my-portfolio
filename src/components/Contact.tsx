import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  Facebook
} from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Let's Connect
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-900 dark:text-white font-medium">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 dark:border-slate-700 pt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-200"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white">
              <h4 className="text-lg font-semibold mb-2">
                Open to Opportunities
              </h4>
              <p className="text-blue-100">
              I'm actively seeking junior to mid-level developer positions where I can contribute to innovative projects while continuing to grow my skills. I'm particularly interested in collaborative environments that value clean code, continuous learning, and making a positive impact. Ready to bring dedication, fresh ideas, and strong problem-solving abilities to your team!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                <span className="text-green-800 dark:text-green-300">
                  Thank you for your message! I'll get back to you soon.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                  placeholder="Tell me about the opportunity or what you'd like to discuss..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center font-medium"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
