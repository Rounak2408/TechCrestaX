import React from 'react';

export default function Badge({
  children,
  variant = 'lime',
  size = 'md',
  dot = true,
  className = '',
}) {
  const variantStyles = {
    lime: "bg-lime-50 dark:bg-lime-950/60 text-lime-900 dark:text-lime-300 border-lime-200/90 dark:border-lime-900",
    neutral: "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700",
    emerald: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900",
    cyan: "bg-sky-50 dark:bg-sky-950/60 text-sky-900 dark:text-sky-300 border-sky-200 dark:border-sky-900",
    amber: "bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border-amber-200 dark:border-amber-900",
    dark: "bg-slate-800 dark:bg-slate-900 text-slate-100 dark:text-slate-200 border-slate-700 dark:border-slate-800",
  };

  const dotColors = {
    lime: "bg-lime-600",
    neutral: "bg-slate-500",
    emerald: "bg-emerald-600",
    cyan: "bg-sky-600",
    amber: "bg-amber-600",
    dark: "bg-lime-400",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wide",
    md: "text-xs px-3 py-1 tracking-wide",
    lg: "text-sm px-3.5 py-1.5 tracking-wide",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-mono border font-medium ${
        variantStyles[variant] || variantStyles.lime
      } ${sizeStyles[size] || sizeStyles.md} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
            dotColors[variant] || dotColors.lime
          }`}
        />
      )}
      <span>{children}</span>
    </span>
  );
}
