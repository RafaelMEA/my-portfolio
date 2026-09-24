import { Award, BadgeCheck, ExternalLink, FileText, Network, ShieldCheck, type LucideIcon } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const certIcons: Record<string, LucideIcon> = {
  'shield-check': ShieldCheck,
  network: Network,
  award: Award,
};

export const Certifications = () => {
  const { certifications } = portfolio;

  return (
    <section id="certifications" className="scroll-mt-16 bg-slate-50 py-20 sm:py-24 dark:bg-night-950">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="certifications"
          title="Certifications & Training"
          description="Credentials from Cisco Networking Academy supporting the security operations direction."
        />

        <div className="mx-auto mt-14 grid gap-6 lg:max-w-4xl sm:grid-cols-2">
          {certifications.map((cert, i) => {
            const Icon = certIcons[cert.icon] ?? Award;
            return (
              <Reveal key={cert.name} delay={i * 100}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-night-700 dark:bg-night-800">
                  <div className="flex items-start gap-4">
                    {cert.badge ? (
                      <img
                        src={cert.badge}
                        alt={`${cert.name} badge`}
                        loading="lazy"
                        className="h-16 w-16 rounded-xl object-cover ring-1 ring-slate-200 dark:ring-night-600"
                      />
                    ) : (
                      <span className="inline-flex h-16 w-16 flex-none items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                        <Icon className="h-8 w-8" />
                      </span>
                    )}
                    <div>
                      <p className="text-sm font-medium text-brand-600 dark:text-brand-400">{cert.organization}</p>
                      <h3 className="mt-0.5 font-semibold text-slate-900 dark:text-white">{cert.name}</h3>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-xs text-slate-600 dark:border-night-600 dark:bg-night-900 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-100 pt-5 dark:border-night-700">
                    {cert.credlyLink && (
                      <a
                        href={cert.credlyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-brand-500 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-600"
                      >
                        <BadgeCheck className="h-3.5 w-3.5" />
                        Verify Credential
                      </a>
                    )}
                    {cert.documentPdf && (
                      <a
                        href={cert.documentPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-500 dark:border-night-600 dark:text-slate-300 dark:hover:border-slate-400"
                      >
                        <FileText className="h-3.5 w-3.5" />
                        View Certificate
                      </a>
                    )}
                    {cert.credlyLink && (
                      <a
                        href={cert.credlyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${cert.name} on Credly`}
                        className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-night-700 dark:hover:text-slate-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};