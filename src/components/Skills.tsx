import { Briefcase, Code2, Network, Shield, Wrench, type LucideIcon } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const categoryIcons: Record<string, LucideIcon> = {
  code: Code2,
  wrench: Wrench,
  shield: Shield,
  network: Network,
  tool: Wrench,
  briefcase: Briefcase,
};

export const Skills = () => {
  const { skills } = portfolio;

  return (
    <section id="skills" className="scroll-mt-16 bg-slate-50 py-20 sm:py-24 dark:bg-night-950">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="skills"
          title="Technical Skills"
          description="Skills built through software development, IT support work, and dedicated cybersecurity training."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.categories.map((category, i) => {
            const Icon = categoryIcons[category.icon] ?? Code2;
            return (
              <Reveal key={category.title} delay={(i % 3) * 80}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-night-700 dark:bg-night-800">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category.title}</h3>
                  </div>

                  <div className="mt-5 space-y-4">
                    {category.groups.map((group) => (
                      <div key={group.label}>
                        <p className="font-mono text-xs font-medium tracking-wide text-slate-500 uppercase dark:text-slate-500">
                          {group.label}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-sm text-slate-700 dark:border-night-600 dark:bg-night-900 dark:text-slate-300"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={100}>
          <div className="mt-10">
            <p className="text-center font-mono text-xs font-medium tracking-widest text-slate-500 uppercase dark:text-slate-500">
              Soft Skills
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2.5">
              {skills.softSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-brand-500/40 bg-brand-500/5 px-4 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};