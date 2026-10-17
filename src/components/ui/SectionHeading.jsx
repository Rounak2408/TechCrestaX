import React from 'react';
import Badge from './Badge';

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
  badgeVariant = 'lime',
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
        <div className="mb-3">
          <Badge variant={badgeVariant}>{eyebrow}</Badge>
        </div>
      )}

      {title && (
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.25]">
          {title}{' '}
          {highlight && (
            <span className="text-[#4d7c0f] dark:text-[#84cc16] font-bold inline-block">{highlight}</span>
          )}
        </h2>
      )}

      {description && (
        <p className="mt-3 text-base sm:text-[17px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          {description}
        </p>
      )}

      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}
