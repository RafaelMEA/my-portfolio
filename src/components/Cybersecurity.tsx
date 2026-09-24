import { KeyRound, Network, Search, Shield, type LucideIcon } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const focusIcons: Record<string, LucideIcon> = {
  shield: Shield,
  key: KeyRound,
  network: Network,
  search: Search,
};

export const Cybersecurity = () => {
  const { cybersecFocus } = portfolio;

  return (
    <section id="security" className="relative scroll-mt-16 overflow-hidden bg-white py-20 sm:py-24 dark:bg-night-900">
      <div
        aria-hidden="true"
        className="bg-grid bg-grid-dark pointer-events-none absolute inset-0 opacity-60 mask-fade-y"
      />

      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="security"
          title="Security Operations"
          description="A deliberate path into SOC analysis — security fundamentals, networking, and detection skills being built right now."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal>
              <p className="leading-relaxed text-slate-600 dark:text-slate-400">{cybersecFocus.intro}</p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {cybersecFocus.focusAreas.map((area, i) => {
                const Icon = focusIcons[area.icon] ?? Shield;
                return (
                  <Reveal key={area.title} delay={i * 80} className="min-w-0">
                    <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-lg dark:border-night-700 dark:bg-night-800">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="font-semibold text-slate-900 dark:text-white">{area.title}</h3>
                      </div>
                      <ul className="mt-4 space-y-1.5">
                        {area.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-brand-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={150}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-night-950 shadow-card-dark dark:border-night-700">
              <div className="flex items-center justify-between border-b border-night-700/70 px-5 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <p className="font-mono text-xs text-slate-500">soc_focus_areas.ts</p>
              </div>

              <div className="space-y-5 px-5 py-6 font-mono text-sm">
                <p className="flex items-center gap-2 text-slate-500">
                  <span className="text-brand-400">$</span> cat security_pipeline.ts
                </p>
                {cybersecFocus.focusAreas.map((area, i) => (
                  <div key={area.title} className="flex items-center gap-3">
                    <span className="w-8 text-right text-xs text-slate-600">[{String(i + 1).padStart(2, '0')}]</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-slate-300">{area.title}</span>
                        <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                          active
                        </span>
                      </div>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {area.items.map((item) => (
                          <span key={item} className="rounded bg-night-800 px-1.5 py-0.5 text-xs text-slate-400">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="border-t border-night-700/70 pt-4">
                  <p className="text-xs leading-relaxed text-slate-500">
                    <span className="text-emerald-400">STATUS:</span> foundational tracks active · training via Cisco
                    Networking Academy · building toward a SOC analyst role
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};