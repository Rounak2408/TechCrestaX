import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Loader2 } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  showArrow = false,
  isLoading = false,
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5 font-semibold",
    md: "text-sm px-5 py-2.5 gap-2 font-semibold",
    lg: "text-base px-6 py-3 gap-2.5 font-semibold",
    icon: "p-2.5 rounded-full aspect-square",
  };

  const variantStyles = {
    primary: "bg-[#0f172a] text-white hover:bg-[#1e293b] dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-sm hover:shadow active:scale-[0.99]",
    secondary: "bg-white text-[#0f172a] dark:bg-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-xs active:scale-[0.99]",
    outline: "bg-transparent text-[#0f172a] dark:text-white border border-slate-300 dark:border-slate-700 hover:border-slate-900 dark:hover:border-white hover:bg-slate-50/50 dark:hover:bg-slate-800/50 active:scale-[0.99]",
    ghost: "bg-transparent text-[#475569] dark:text-slate-300 hover:text-[#0f172a] dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/70 active:scale-[0.99]",
    lime: "bg-[#4d7c0f] text-white hover:bg-[#3f6212] dark:bg-[#65a30d] dark:hover:bg-[#4d7c0f] shadow-sm active:scale-[0.99]",
    dark: "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 shadow-sm",
    white: "bg-white text-slate-900 font-bold hover:bg-slate-100 shadow-sm active:scale-[0.99]",
    darkOutline: "bg-slate-800/90 text-white font-medium border border-slate-700 hover:bg-slate-700 hover:border-slate-600 shadow-xs active:scale-[0.99]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : Icon ? (
        <Icon className="w-4 h-4" />
      ) : null}
      <span>{children}</span>
      {showArrow && !isLoading && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClasses}`} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('https://wa.me');
    return (
      <a
        href={href}
        className={`group ${combinedClasses}`}
        target={isExternal && !href.startsWith('mailto:') ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`group ${combinedClasses}`}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}
