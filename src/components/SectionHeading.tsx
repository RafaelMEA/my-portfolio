import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) => {
  const centered = align === 'center';

  return (
    <Reveal
      className={`max-w-3xl ${centered ? 'mx-auto text-center' : 'text-left'}`}
    >
      <p className="font-mono text-sm font-medium tracking-widest text-brand-600 uppercase dark:text-brand-400">
        {'// '}
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400 ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
};