'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageLightbox({ src, alt, className }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  return (
    <>
      <div
        className={`cursor-zoom-in ${className || ''}`}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(true)}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-zoom-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          >
            <motion.div
              className="relative w-[90vw] h-[90vh] max-w-[1400px]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
