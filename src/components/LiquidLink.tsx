import type { ReactNode } from 'react';

import { LiquidButton } from './animate-ui/components/buttons/liquid';
import { cn } from '@/lib/utils';

interface LiquidLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  size?: 'default' | 'nav' | 'wide';
  tone?: 'primary' | 'quiet' | 'nav';
}

export default function LiquidLink({
  href,
  children,
  className,
  ariaLabel,
  size = 'default',
  tone = 'primary',
}: LiquidLinkProps) {
  const sizeClass = {
    default: 'min-h-11 px-4 py-3 text-sm tracking-[0.22em] sm:px-5',
    wide: 'min-h-11 px-4 py-3 text-sm tracking-[0.22em] sm:px-5 md:min-w-24',
    nav: 'min-h-9 px-2 py-2 text-[0.72rem] tracking-[0.01em] sm:px-3 sm:text-sm sm:tracking-[0.02em]',
  }[size];

  const toneClass = {
    primary:
      'border border-[#d6b05c]/70 bg-black/20 text-[#fff8df] [--liquid-button-background-color:rgba(0,0,0,0.2)]',
    quiet:
      'border border-[#d6b05c]/25 bg-transparent text-[#c7bda8] [--liquid-button-background-color:transparent]',
    nav:
      'border border-transparent bg-transparent text-[#c7bda8] [--liquid-button-background-color:transparent] hover:[&_span]:text-[#050505]',
  }[tone];

  return (
    <LiquidButton
      asChild
      delay="0.16s"
      fillHeight={tone === 'nav' ? '1px' : '4px'}
      hoverColor="#050505"
      hoverScale={tone === 'nav' ? 1 : 1.03}
      tapScale={0.98}
      variant="ghost"
      className={cn(
        'h-auto rounded-none font-bold shadow-none',
        tone === 'nav' ? 'lowercase' : 'uppercase',
        sizeClass,
        toneClass,
        '[--liquid-button-color:#d6b05c]',
        'hover:border-[#d6b05c] hover:text-[#050505] focus-visible:border-[#d6b05c] focus-visible:ring-[#d6b05c]/40',
        className,
      )}
    >
      <a href={href} aria-label={ariaLabel}>
        {children}
      </a>
    </LiquidButton>
  );
}
