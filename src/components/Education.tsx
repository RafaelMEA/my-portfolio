import { GraduationCap } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export const Education = () => {
  const { education } = portfolio;

  return (
    <section id="education" className="scroll-mt-16 bg-white py-20 sm:py-24 dark:bg-night-900">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="education"
          title="Education"
          description="Academic foundation in computer science and early exposure to programming."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
          {education.map((edu, i) => (
            <Reveal key={edu.institution} delay={i * 80}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-night-700 dark:bg-night-800">
                <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{edu.institution}</h3>
                  <p className="mt-1 text-brand-600 dark:text-brand-400">{edu.degree}</p>
                  {edu.field && (
                    <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-500">{edu.field}</p>
                  )}
                  {edu.extra && (
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{edu.extra}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};