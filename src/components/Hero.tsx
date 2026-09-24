import { ArrowRight, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import { RotatingRole } from './RotatingRole';
import { Reveal } from './Reveal';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const heroChips = ['TypeScript', 'React', 'Vue.js', 'Node.js', 'Laravel', 'MySQL', 'PostgreSQL'];

export const Hero = () => {
  const { profile } = portfolio;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-50 pt-16 dark:bg-night-950"
    >
      <div
        aria-hidden="true"
        className="bg-grid bg-grid-dark pointer-events-none absolute inset-0 mask-fade-y"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl dark:bg-brand-500/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-sky-600/10 blur-3xl dark:bg-sky-500/10"
      />

      <div className="relative mx-auto grid max-w-8xl gap-16 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:px-8 lg:pb-28 lg:pt-24">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-soft" />
              <span className="font-mono text-xs font-medium text-emerald-700 dark:text-emerald-400">
                Open to opportunities
              </span>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              Rafael Martin{" "}
              <span className="bg-gradient-to-r from-brand-500 to-sky-500 bg-clip-text text-transparent dark:from-brand-400 dark:to-sky-400">
                Aquino
              </span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-4 flex items-center gap-2 font-mono text-base text-slate-700 dark:text-slate-300 sm:text-lg">
              <span className="text-brand-500">&gt;</span>
              <RotatingRole roles={profile.roles} />
              <span className="h-5 w-0.5 animate-blink bg-brand-500" aria-hidden="true" />
            </p>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-6 flex flex-wrap gap-2">
              {heroChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-md border border-slate-200 bg-white px-2.5 py-1 font-mono text-xs font-medium text-slate-600 dark:border-night-700 dark:bg-night-800 dark:text-slate-300"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-brand-600"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={profile.resumePdf}
                download="Rafael-Aquino-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-night-600 dark:bg-night-800 dark:text-white dark:hover:border-brand-400 dark:hover:text-brand-400"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
              <a
                href={profile.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-500 dark:border-night-600 dark:bg-night-800 dark:text-white dark:hover:border-slate-400"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={profile.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-500 dark:border-night-600 dark:bg-night-800 dark:text-white dark:hover:border-slate-400"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:justify-self-end">
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-500/25 via-transparent to-sky-500/25 blur-xl"
            />
            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-card-dark dark:border-night-700 dark:bg-night-800">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={profile.profileImage}
                    alt={`Portrait of ${profile.name}`}
                    width={96}
                    height={96}
                    loading="eager"
                    className="h-24 w-24 rounded-2xl object-cover ring-2 ring-brand-500/40"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 dark:border-night-800"
                  />
                </div>
                <div>
                  <p className="font-mono text-xs text-slate-500 dark:text-slate-400">$ whoami</p>
                  <p className="mt-1 font-semibold text-slate-900 dark:text-white">{profile.name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{profile.headline}</p>
                </div>
              </div>

              <dl className="mt-6 space-y-3 border-t border-slate-100 pt-5 dark:border-night-700">
                <div className="flex items-center gap-3 text-sm">
                  <dt className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <MapPin className="h-4 w-4 text-brand-500" />
                    Location
                  </dt>
                  <dd className="ml-auto text-right text-slate-700 dark:text-slate-300">{profile.location}</dd>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <dt className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <Mail className="h-4 w-4 text-brand-500" />
                    Email
                  </dt>
                  <dd className="ml-auto text-right text-slate-700 dark:text-slate-300">{profile.email}</dd>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <dt className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <span className="inline-block h-4 w-2 rounded-sm bg-slate-400/60" aria-hidden="true" />
                    Focus
                  </dt>
                  <dd className="ml-auto text-right text-slate-700 dark:text-slate-300">Dev · IT · SOC</dd>
                </div>
              </dl>

              <a
                href={profile.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 flex items-center justify-between rounded-xl bg-slate-100 px-4 py-3 transition-colors hover:bg-slate-200/70 dark:bg-night-900 dark:hover:bg-night-700"
              >
                <span className="flex items-center gap-2 font-mono text-sm text-slate-700 dark:text-slate-300">
                  <Github className="h-4 w-4" />
                  {profile.socials.github.url.replace('https://', '')}
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};