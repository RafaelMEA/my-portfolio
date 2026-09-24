import { BookOpen, Code2, GraduationCap, Wrench } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const highlightCards = [
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: 'Computer Science Graduate',
    detail: 'Bachelor of Science in Computer Science from the University of Baguio.',
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: 'Full-Stack Developer',
    detail: 'React, Vue.js, Node.js, Laravel, PHP, MySQL, and PostgreSQL experience.',
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: 'IT Support Practitioner',
    detail: 'Hardware and software troubleshooting in a government environment.',
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'SOC-in-Training',
    detail: 'Actively building cybersecurity, networking, and log analysis skills.',
  },
];

export const About = () => {
  const { profile } = portfolio;

  return (
    <section id="about" className="scroll-mt-16 bg-white py-20 sm:py-24 dark:bg-night-900">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="about"
          title="Who I Am"
          description="A developer who builds reliable software, supports real users, and is intentionally growing into security operations."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {profile.about.map((paragraph, i) => (
              <Reveal key={i} delay={i * 80}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlightCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand-500/50 hover:shadow-lg dark:border-night-700 dark:bg-night-800">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white dark:text-brand-400">
                    {card.icon}
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{card.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{card.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <div className="mt-14 flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-6 sm:flex-row sm:gap-8 dark:border-night-700 dark:bg-night-800">
            <p className="flex items-center gap-2 font-mono text-sm text-slate-700 dark:text-slate-300">
              <span className="h-2 w-2 rounded-full bg-brand-500" aria-hidden="true" />
              CURRENT FOCUS
            </p>
            <p className="text-center text-sm text-slate-600 sm:text-left dark:text-slate-400">
              {profile.availability}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};