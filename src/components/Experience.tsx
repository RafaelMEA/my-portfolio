import { Briefcase } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export const Experience = () => {
  const { experience } = portfolio;

  return (
    <section id="experience" className="scroll-mt-16 bg-white py-20 sm:py-24 dark:bg-night-900">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="experience"
          title="Professional Experience"
          description="Hands-on government IT and software development work building internal tools and supporting real users."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-[22px] w-px bg-gradient-to-b from-brand-500/60 via-slate-200 to-transparent sm:left-[27px] dark:via-night-700"
          />
          <ol className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={job.id} delay={i * 100}>
                <li className="relative flex gap-5 sm:gap-6">
                  <div className="relative z-10 mt-1 flex h-11 w-11 flex-none items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-slate-200 dark:bg-night-800 dark:ring-night-600 sm:h-14 sm:w-14">
                    {job.img ? (
                      <img
                        src={job.img}
                        alt={`${job.company} logo`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Briefcase className="h-5 w-5 text-slate-400" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-night-700 dark:bg-night-800">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                        <p className="mt-0.5 text-sm font-medium text-brand-600 dark:text-brand-400">
                          {job.company}
                          <span className="ml-2 inline-block rounded bg-slate-200 px-1.5 py-0.5 text-xs text-slate-600 dark:bg-night-700 dark:text-slate-400">
                            {job.type}
                          </span>
                        </p>
                      </div>
                      <p className="font-mono text-xs text-slate-500 dark:text-slate-500">{job.period}</p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-slate-200 bg-white px-2 py-0.5 font-mono text-xs text-slate-600 dark:border-night-600 dark:bg-night-900 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-4 space-y-2">
                      {job.responsibilities.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-500"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={120}>
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-night-700 dark:bg-night-800">
              <Briefcase className="mt-0.5 h-5 w-5 flex-none text-brand-500" />
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Full internship details, responsibilities, and additional project work are available in the resume.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};