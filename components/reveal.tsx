'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -32 : direction === 'right' ? 32 : 0,
      y: direction === 'up' ? 32 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{
        duration: 0.8,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
