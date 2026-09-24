import { Github, Linkedin, Shield } from 'lucide-react';
import { portfolio } from '../data/portfolio';

const footerLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'security', label: 'Security' },
  { id: 'contact', label: 'Contact' },
];

export const Footer = () => {
  const { profile } = portfolio;
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-night-700 dark:bg-night-950">
      <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2.5 md:justify-start">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-night-900 ring-1 ring-brand-500/40 dark:bg-night-800">
                <Shield className="h-4 w-4 text-brand-400" />
              </span>
              <span className="font-mono text-sm font-semibold text-slate-900 dark:text-white">
                Rafael<span className="text-brand-500">.Aquino</span>
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-slate-500 dark:text-slate-500">
              Junior Software Developer · IT Support · Aspiring Software Engineer &amp; SOC Analyst
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
            {footerLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex gap-3">
            <a
              href={profile.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-lg p-2 text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-lg p-2 text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-slate-100 pt-6 sm:flex-row dark:border-night-700">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-slate-500 dark:text-slate-500">
            Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};