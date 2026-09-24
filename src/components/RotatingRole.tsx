import { useEffect, useState } from 'react';

interface RotatingRoleProps {
  roles: string[];
}

export const RotatingRole = ({ roles }: RotatingRoleProps) => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setAnimate(false);
      return;
    }
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [roles]);

  if (!animate) {
    return <span>{roles[roles.length - 1]}</span>;
  }

  return (
    <span key={index} className="inline-block animate-fade-up">
      {roles[index]}
    </span>
  );
};