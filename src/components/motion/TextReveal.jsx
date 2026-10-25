import React from 'react';
import Reveal from './Reveal';

/**
 * Editorial Typography Reveal Component.
 * Tailored for headlines, subheadings, paragraphs, and display numbers.
 * Starts with subtle ~20-28px upward offset and fades in with luxury deceleration.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string|React.ElementType} [props.as='div']
 * @param {number} [props.y=22] Upward translation in pixels
 * @param {number} [props.delay=0] Delay in milliseconds
 * @param {number} [props.duration=620] Transition duration in milliseconds
 * @param {string} [props.className='']
 */
export default function TextReveal({
  children,
  as = 'div',
  y = 22,
  delay = 0,
  duration = 620,
  className = '',
  style = {},
  ...rest
}) {
  return (
    <Reveal
      as={as}
      y={y}
      delay={delay}
      duration={duration}
      className={`text-reveal-wrap ${className}`.trim()}
      style={style}
      {...rest}
    >
      {children}
    </Reveal>
  );
}
