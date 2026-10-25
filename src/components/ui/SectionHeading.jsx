import React from 'react';
import Badge from './Badge';
import Reveal from '../motion/Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
  badgeVariant = 'blush',
  className = '',
  children,
}) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses[align]} ${className}`}>
      {eyebrow && (
        <Reveal delay={0} y={16} className="mb-3">
          <Badge variant={badgeVariant}>{eyebrow}</Badge>
        </Reveal>
      )}

      {title && (
        <Reveal delay={60} y={24} as="div" className="w-full">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.25]">
            {title}{' '}
            {highlight && (
              <span className="text-[#FF6B4A] dark:text-[#FF7C42] font-bold inline-block">{highlight}</span>
            )}
          </h2>
        </Reveal>
      )}

      {description && (
        <Reveal delay={120} y={20} as="div" className="w-full">
          <p className="mt-3 text-base sm:text-[17px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {description}
          </p>
        </Reveal>
      )}

      {children && (
        <Reveal delay={180} y={20} as="div" className="mt-6 w-full">
          {children}
        </Reveal>
      )}
    </div>
  );
}
