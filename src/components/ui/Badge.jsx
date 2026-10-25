import React from 'react';

export default function Badge({
  children,
  variant = 'blush',
  size = 'md',
  dot = true,
  className = '',
}) {
  const variantStyles = {
    coral: "bg-[#FF6B4A]/10 dark:bg-[#FF6B4A]/20 text-[#C2410C] dark:text-[#FF8C70] border-[#FFD4C9] dark:border-[#FF6B4A]/30",
    blush: "bg-[#FF6B4A]/10 dark:bg-[#FF6B4A]/20 text-[#C2410C] dark:text-[#FF8C70] border-[#FFD4C9] dark:border-[#FF6B4A]/30",
    lime: "bg-[#FF6B4A]/10 dark:bg-[#FF6B4A]/20 text-[#C2410C] dark:text-[#FF8C70] border-[#FFD4C9] dark:border-[#FF6B4A]/30",
    neutral: "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700",
    emerald: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900",
    cyan: "bg-sky-50 dark:bg-sky-950/60 text-sky-900 dark:text-sky-300 border-sky-200 dark:border-sky-900",
    amber: "bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border-amber-200 dark:border-amber-900",
    dark: "bg-slate-800 dark:bg-slate-900 text-slate-100 dark:text-slate-200 border-slate-700 dark:border-slate-800",
  };

  const dotColors = {
    coral: "bg-[#FF6B4A]",
    blush: "bg-[#FF6B4A]",
    lime: "bg-[#FF6B4A]",
    neutral: "bg-slate-500",
    emerald: "bg-emerald-600",
    cyan: "bg-sky-600",
    amber: "bg-amber-600",
    dark: "bg-[#FF6B4A]",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wide",
    md: "text-xs px-3 py-1 tracking-wide",
    lg: "text-sm px-3.5 py-1.5 tracking-wide",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-mono border font-medium ${
        variantStyles[variant] || variantStyles.blush
      } ${sizeStyles[size] || sizeStyles.md} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
            dotColors[variant] || dotColors.blush
          }`}
        />
      )}
      <span>{children}</span>
    </span>
  );
}
