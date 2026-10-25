import React, { useRef, useState, useEffect } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/**
 * Editorial Word-by-Word Typography Reveal Component.
 * Splits text into words with choreographic upward entrance from an overflow clip.
 * Inspired by luxury digital agency headlines (e.g. Alpha Agency).
 *
 * @param {Object} props
 * @param {string} props.text - The sentence or phrase to reveal word-by-word
 * @param {string|React.ElementType} [props.as='h1'] - Container HTML tag
 * @param {string[]} [props.highlightWords=[]] - Words that should receive accent coloring
 * @param {string} [props.highlightClass='text-[#FF6B4A] dark:text-[#FF7C42]'] - CSS class for highlighted words
 * @param {number} [props.delay=0] - Base delay before sequence begins (ms)
 * @param {number} [props.staggerDelay=45] - Delay step between consecutive words (ms)
 * @param {number} [props.duration=700] - Duration of each word animation (ms)
 * @param {string} [props.className=''] - Container classes
 */
export default function WordReveal({
  text = '',
  as: Component = 'h1',
  highlightWords = [],
  highlightClass = 'text-[#FF6B4A] dark:text-[#FF7C42]',
  delay = 0,
  staggerDelay = 45,
  duration = 700,
  className = '',
  ...rest
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1, once: true });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }
  }, []);

  const words = text ? text.split(' ') : [];

  const isHighlighted = (word) => {
    const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return highlightWords.some(
      (hw) => cleanWord === hw.toLowerCase() || word.toLowerCase().includes(hw.toLowerCase())
    );
  };

  return (
    <Component
      ref={ref}
      className={`word-reveal-container leading-tight ${className}`.trim()}
      {...rest}
    >
      {words.map((word, index) => {
        const highlighted = isHighlighted(word);
        const wordDelay = delay + index * staggerDelay;

        if (reducedMotion) {
          return (
            <span
              key={`${word}-${index}`}
              className={`inline-block mr-[0.28em] ${highlighted ? highlightClass : ''}`}
            >
              {word}
            </span>
          );
        }

        return (
          <span
            key={`${word}-${index}`}
            className="inline-block overflow-hidden align-top mr-[0.28em] py-0.5 -my-0.5"
          >
            <span
              className={`inline-block will-change-transform ${highlighted ? highlightClass : ''}`}
              style={{
                transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 115%, 0)',
                opacity: isVisible ? 1 : 0,
                transitionProperty: 'transform, opacity',
                transitionDuration: `${duration}ms`,
                transitionDelay: `${wordDelay}ms`,
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </Component>
  );
}
