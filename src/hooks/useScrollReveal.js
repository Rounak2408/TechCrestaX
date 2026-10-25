import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for smooth scroll-triggered reveals using native IntersectionObserver.
 * Fully supports prefers-reduced-motion and gracefully falls back if JS / observer is disabled.
 *
 * @param {Object} options
 * @param {number} [options.threshold=0.15] Intersection ratio threshold
 * @param {string} [options.rootMargin='0px 0px -40px 0px'] Root margin offset
 * @param {boolean} [options.once=true] Animate only once when entering viewport
 * @param {number} [options.delay=0] Delay in milliseconds before setting visible
 * @returns {{ ref: React.RefObject, isVisible: boolean }}
 */
export function useScrollReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -40px 0px',
  once = true,
  delay = 0,
} = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // 1. SSR or missing browser environment check
    if (typeof window === 'undefined') {
      setIsVisible(true);
      return;
    }

    // 2. Accessibility: Support prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    // 3. Fallback if IntersectionObserver is not supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    let timeoutId = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              timeoutId = setTimeout(() => {
                setIsVisible(true);
              }, delay);
            } else {
              setIsVisible(true);
            }

            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            if (timeoutId) clearTimeout(timeoutId);
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (element) {
        observer.unobserve(element);
      }
      observer.disconnect();
    };
  }, [threshold, rootMargin, once, delay]);

  return { ref: elementRef, isVisible };
}

export default useScrollReveal;
