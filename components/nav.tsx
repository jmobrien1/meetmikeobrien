'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/insights', label: 'Insights' },
  { href: '/propelai', label: 'PropelAI' },
  { href: '/projects', label: 'Projects' },
  { href: '/life', label: 'Life' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between border-b border-teal/[0.08]"
        style={{
          padding: '0 clamp(24px, 4vw, 64px)',
          background: 'linear-gradient(180deg, rgba(10,22,40,0.93), rgba(10,22,40,0.53))',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal to-teal-dim flex items-center justify-center font-mono font-bold text-[0.85rem] text-navy">
            MO
          </div>
          <span className="font-sans font-semibold text-[0.95rem] text-white tracking-[0.01em]">
            meetmikeobrien
          </span>
          <span className="text-teal text-[0.95rem] font-sans">.com</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-md font-sans text-[0.82rem] font-medium tracking-[0.02em] transition-all duration-300 no-underline ${
                isActive(link.href)
                  ? 'text-teal bg-teal/[0.15]'
                  : 'text-slate hover:text-teal'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[2px] bg-cream transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-cream transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-cream transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-navy/95 backdrop-blur-xl pt-[72px] md:hidden"
          >
            <div className="flex flex-col p-8 gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg font-sans text-lg font-medium transition-all no-underline ${
                    isActive(link.href)
                      ? 'text-teal bg-teal/[0.15]'
                      : 'text-slate hover:text-teal'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
