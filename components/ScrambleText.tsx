
import React, { useState, useEffect } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  hover?: boolean;
  step?: number;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_>|/";

export const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className = "", delay = 0, hover = false, step = 0.5 }) => {
  const [displayText, setDisplayText] = useState(hover ? text : "");

  const animate = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(_prev => 
        text
          .split("")
          .map((_letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += step;
    }, 30);
  };

  useEffect(() => {
    if (hover) return;

    const timeout = setTimeout(() => {
        animate();
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, hover, step]);

  const handleMouseEnter = () => {
    if (hover) {
        animate();
    }
  };

  return (
    <span 
        className={`${className}`} 
        onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </span>
  );
};
