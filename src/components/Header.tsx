import { useCallback, useEffect, useState } from 'react';
import { Download, Github, Linkedin, Menu, Moon, Shield, Sun, X } from 'lucide-react';
import { useThemeContext } from '../hooks/useThemeContext';
import { portfolio } from '../data/portfolio';

interface HeaderProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'security', label: 'Security' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Header = ({ activeSection }: HeaderProps) => {
  const { isDark, toggleTheme } = useThemeContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { profile } = portfolio;

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMenuOpen, closeMenu]);

  const handleNav = (id: string) => {
    closeMenu();
    scrollToSection(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-night-700/60 dark:bg-night-950/80">
      <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('home');
          }}
          className="group flex items-center gap-2.5"
          aria-label="Back to top"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-night-900 ring-1 ring-brand-500/40 dark:bg-night-800">
            <Shield className="h-5 w-5 text-brand-400" />
          </span>
          <span className="font-mono text-sm font-semibold text-slate-900 dark:text-white">
            Rafael<span className="text-brand-500">.Aquino</span>
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNav(item.id);
              }}
              aria-current={activeSection === item.id ? 'true' : undefined}
              className={`rounded-md px-2.5 py-2 text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'text-brand-600 dark:text-brand-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumePdf}
            download="Rafael-Aquino-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600 md:inline-flex"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
          <a
            href={profile.socials.github.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hidden rounded-lg p-2 text-slate-500 transition-colors hover:text-slate-900 xl:block dark:text-slate-400 dark:hover:text-white"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={profile.socials.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hidden rounded-lg p-2 text-slate-500 transition-colors hover:text-slate-900 xl:block dark:text-slate-400 dark:hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-night-800"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 lg:hidden dark:text-slate-300 dark:hover:bg-night-800"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-menu" className="border-t border-slate-200/70 bg-white/95 backdrop-blur-md lg:hidden dark:border-night-700/60 dark:bg-night-950/95">
          <nav className="mx-auto max-w-8xl space-y-1 px-4 py-4 sm:px-6" aria-label="Mobile">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.id);
                }}
                className={`block rounded-md px-3 py-2.5 text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-night-800'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.resumePdf}
              download="Rafael-Aquino-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};