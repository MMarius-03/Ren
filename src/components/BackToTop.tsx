import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={[
        'group fixed bottom-6 right-6 z-50 grid size-11 place-items-center',
        'border border-[#d6b05c]/35 bg-black/55 text-[#d6b05c] backdrop-blur-md',
        'shadow-[0_0_22px_rgba(214,176,92,0.18)] transition',
        'hover:border-[#d6b05c] hover:bg-[#d6b05c] hover:text-[#050505]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b05c]/50',
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0',
      ].join(' ')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5 transition-transform group-hover:-translate-y-0.5"
        aria-hidden="true"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
}
