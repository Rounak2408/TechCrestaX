import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/**
 * Editorial scroll-reveal wrapper component.
 * Provides subtle upward translation (~20-32px), opacity transition, and smooth luxury easing.
 * Decouples transition after arrival to ensure child hover interactions remain 100% independent.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string|React.ElementType} [props.as='div'] HTML tag to render
 * @param {number} [props.y=24] Upward translation in pixels (default 24px)
 * @param {number} [props.delay=0] Delay in milliseconds
 * @param {number} [props.duration=650] Duration in milliseconds
 * @param {number} [props.threshold=0.12] IntersectionObserver threshold
 * @param {string} [props.rootMargin='0px 0px -40px 0px'] Root margin offset
 * @param {boolean} [props.once=true] Reveal only once
 * @param {string} [props.className=''] Tailwind or custom CSS classes
 * @param {Object} [props.style={}] Custom inline styles
 */
export default function Reveal({
  children,
  as: Component = 'div',
  y = 24,
  delay = 0,
  duration = 650,
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  once = true,
  className = '',
  style = {},
  ...rest
}) {
  const { ref, isVisible } = useScrollReveal({
    threshold,
    rootMargin,
    once,
  });

  const [hasCompletedTransition, setHasCompletedTransition] = useState(false);

  // Transition style with luxury cubic-bezier curve
  const motionStyle = {
    opacity: isVisible ? 1 : 0,
    transform: hasCompletedTransition
      ? 'none'
      : isVisible
      ? 'translate3d(0, 0, 0)'
      : `translate3d(0, ${y}px, 0)`,
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: hasCompletedTransition ? 'auto' : 'opacity, transform',
    ...style,
  };

  const handleTransitionEnd = (e) => {
    // Only respond to this element's transform or opacity transition ending
    if (e.target === ref.current && (e.propertyName === 'transform' || e.propertyName === 'opacity')) {
      setHasCompletedTransition(true);
    }
  };

  return (
    <Component
      ref={ref}
      style={motionStyle}
      onTransitionEnd={handleTransitionEnd}
      className={`reveal-item ${isVisible ? 'is-revealed' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Component>
  );
}
