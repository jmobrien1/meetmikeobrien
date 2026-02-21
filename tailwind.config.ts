import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a1628',
          mid: '#0f2140',
          light: '#162d50',
        },
        teal: {
          DEFAULT: '#2dd4a8',
          dim: '#1a9e7a',
          glow: 'rgba(45, 212, 168, 0.15)',
        },
        slate: '#94a3b8',
        cream: '#f8fafc',
        warm: {
          sand: '#f5e6d3',
          terra: '#c4956a',
          amber: '#d4a574',
        },
      },
      fontFamily: {
        serif: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(2.8rem, 6vw, 5.2rem)',
        'section': 'clamp(2rem, 4vw, 3.2rem)',
        'card-title': '1.35rem',
        'body': '1.05rem',
        'body-sm': '0.92rem',
        'eyebrow': '0.72rem',
        'metric': '2rem',
        'tag': '0.65rem',
      },
      borderRadius: {
        'card': '12px',
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      maxWidth: {
        'content': '1280px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
