import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, ExternalLink, Github, Plus, X } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import type { SoftwareProject } from '../types';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const isSvg = (src: string) => src.toLowerCase().endsWith('.svg');

const ProjectImage = ({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  if (isSvg(src)) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-brand-500/20 via-night-900 to-sky-600/20 ${className}`}
      >
        <img src={src} alt={alt} loading="lazy" className="h-14 w-14" />
      </div>
    );
  }
  return <img src={src} alt={alt} loading="lazy" className={`${className} object-cover`} />;
};

interface SoftwareProjectCardProps {
  project: SoftwareProject;
  onOpen: (project: SoftwareProject) => void;
}

const SoftwareProjectCard = ({ project, onOpen }: SoftwareProjectCardProps) => {
  const techs = project.tech_stack.split(',').map((t) => t.trim()).filter(Boolean);

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl dark:border-night-700 dark:bg-night-800">
      <ProjectImage
        src={project.proj_image}
        alt={`${project.proj_name} preview`}
        className="h-44 w-full"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.proj_name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {techs.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-xs text-slate-600 dark:border-night-600 dark:bg-night-900 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
          {techs.length > 4 && (
            <span className="rounded-md px-2 py-0.5 font-mono text-xs text-slate-500 dark:text-slate-500">
              +{techs.length - 4}
            </span>
          )}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4 dark:border-night-700">
          {project.proj_link && (
            <a
              href={project.proj_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-500 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-600"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-500 dark:border-night-600 dark:text-slate-300 dark:hover:border-slate-400"
            >
              <Github className="h-3.5 w-3.5" />
              Source
            </a>
          )}
          {project.features && project.features.length > 0 && (
            <button
              onClick={() => onOpen(project)}
              className="ml-auto inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-brand-600 transition-colors hover:bg-brand-500/10 dark:text-brand-400"
            >
              <Plus className="h-3.5 w-3.5" />
              Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

interface ProjectModalProps {
  project: SoftwareProject;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const techs = useMemo(
    () => project.tech_stack.split(',').map((t) => t.trim()).filter(Boolean),
    [project.tech_stack]
  );
  const dialogRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
      previouslyFocused?.focus();
    };
  }, [close]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <button
        aria-label="Close project details"
        onClick={close}
        className="absolute inset-0 cursor-default bg-night-950/70 backdrop-blur-sm"
      />
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-night-600 dark:bg-night-800"
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 z-10 rounded-full bg-night-950/50 p-2 text-white transition-colors hover:bg-night-950/80"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <ProjectImage
          src={project.proj_image}
          alt={`${project.proj_name} preview`}
          className="h-48 w-full"
        />

        <div className="p-6 sm:p-8">
          <h3 id="project-modal-title" className="text-2xl font-bold text-slate-900 dark:text-white">
            {project.proj_name}
          </h3>
          <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{project.description}</p>

          {project.features && project.features.length > 0 && (
            <div className="mt-6">
              <h4 className="font-semibold text-slate-900 dark:text-white">Highlights</h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6">
            <h4 className="font-semibold text-slate-900 dark:text-white">Technologies</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-600 dark:border-night-600 dark:bg-night-900 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-100 pt-6 dark:border-night-700">
            {project.proj_link && (
              <a
                href={project.proj_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
              >
                <ExternalLink className="h-4 w-4" />
                View Live Demo
              </a>
            )}
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-500 dark:border-night-600 dark:text-slate-300 dark:hover:border-slate-400"
              >
                <Github className="h-4 w-4" />
                View Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const { softwareProjects, cybersecProjects } = portfolio;
  const [selectedProject, setSelectedProject] = useState<SoftwareProject | null>(null);

  return (
    <section id="projects" className="scroll-mt-16 bg-slate-50 py-20 sm:py-24 dark:bg-night-950">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="projects"
          title="Featured Projects"
          description="Real-world applications built during academic, internship, and self-driven work."
        />

        <Reveal delay={80}>
          <div className="mt-14 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200 dark:bg-night-700" />
            <h3 className="font-mono text-sm font-medium tracking-wide text-slate-500 uppercase dark:text-slate-400">
              Software Development
            </h3>
            <div className="h-px flex-1 bg-slate-200 dark:bg-night-700" />
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {softwareProjects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 80} className="min-w-0">
              <SoftwareProjectCard project={project} onOpen={setSelectedProject} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-16 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200 dark:bg-night-700" />
            <h3 className="flex items-center gap-2 font-mono text-sm font-medium tracking-wide text-slate-500 uppercase dark:text-slate-400">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              Security Lab
            </h3>
            <div className="h-px flex-1 bg-slate-200 dark:bg-night-700" />
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cybersecProjects.map((project, i) => {
            const techs = project.tech_stack.split(',').map((t) => t.trim()).filter(Boolean);
            return (
              <Reveal key={project.id} delay={i * 80} className="min-w-0">
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl dark:border-night-700 dark:bg-night-800">
                  <ProjectImage
                    src={project.proj_image}
                    alt={`${project.proj_name} preview`}
                    className="h-40 w-full"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-xs font-medium tracking-wide text-brand-600 uppercase dark:text-brand-400">
                      SOC Lab
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{project.proj_name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {techs.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-xs text-slate-600 dark:border-night-600 dark:bg-night-900 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.proj_link && (
                      <a
                        href={project.proj_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 self-start rounded-lg bg-emerald-600/90 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-600"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" />
                        Visit Lab
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};