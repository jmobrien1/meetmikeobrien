'use client';

import { useCounter } from '@/lib/use-counter';
import Reveal from './reveal';

interface MetricCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  delay?: number;
}

export default function MetricCard({
  value,
  label,
  prefix = '',
  suffix = '',
  delay = 0,
}: MetricCardProps) {
  const counter = useCounter(value, 2200, prefix, suffix);

  return (
    <Reveal delay={delay}>
      <div
        ref={counter.ref}
        className="py-7 px-5 border-l-2 border-teal rounded-r-lg"
        style={{
          background: 'linear-gradient(135deg, rgba(45, 212, 168, 0.15), transparent)',
        }}
      >
        <div className="text-metric font-mono font-bold text-teal tracking-[-0.02em] leading-none">
          {counter.display}
        </div>
        <div className="text-[0.78rem] text-slate mt-2 font-sans font-medium tracking-[0.06em] uppercase">
          {label}
        </div>
      </div>
    </Reveal>
  );
}
