import { ArrowUpRight, Download, Facebook, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export const Contact = () => {
  const { profile } = portfolio;

  const contactItems = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: profile.email,
      href: profile.emailHref,
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: profile.phone,
      href: profile.phoneHref,
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: profile.location,
      href: null,
    },
  ];

  const socials = [
    { icon: <Github className="h-5 w-5" />, label: 'GitHub', url: profile.socials.github.url, handle: profile.socials.github.handle },
    { icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn', url: profile.socials.linkedin.url, handle: profile.socials.linkedin.handle },
    { icon: <Facebook className="h-5 w-5" />, label: 'Facebook', url: profile.socials.facebook.url, handle: profile.socials.facebook.label },
  ];

  return (
    <section id="contact" className="scroll-mt-16 bg-slate-50 py-20 sm:py-24 dark:bg-night-950">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="contact"
          title="Get in Touch"
          description="Open to junior developer, IT support, and entry-level SOC opportunities. Let's talk about how I can contribute to your team."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.6fr]">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {contactItems.map((item, i) => (
              <Reveal key={item.label} delay={i * 80} className="min-w-0">
                <div className="flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-night-700 dark:bg-night-800">
                  <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-xs font-medium tracking-wide text-slate-500 uppercase dark:text-slate-500">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block text-sm break-words font-medium text-slate-900 transition-colors hover:text-brand-600 dark:text-white dark:hover:text-brand-400"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="lg:justify-self-end">
            <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 dark:border-night-700 dark:bg-night-800">
              <h3 className="font-semibold text-slate-900 dark:text-white">Elsewhere</h3>
              <div className="mt-4 space-y-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 transition-colors hover:border-brand-500/60 dark:border-night-600"
                  >
                    <span className="text-slate-500 transition-colors group-hover:text-brand-500 dark:text-slate-400">
                      {social.icon}
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-medium text-slate-900 dark:text-white">{social.label}</span>
                      {social.handle && (
                        <span className="block font-mono text-xs text-slate-500 dark:text-slate-500">{social.handle}</span>
                      )}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>

              <a
                href={profile.resumePdf}
                download="Rafael-Aquino-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};