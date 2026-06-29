import { useEffect } from 'react';

export default function ScrollPolish() {
  useEffect(() => {
    const progress = document.querySelector<HTMLElement>('[data-scroll-progress]');
    const header = document.querySelector<HTMLElement>('[data-site-header]');
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    const updateScrollState = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      progress?.style.setProperty('--scroll-progress', `${Math.max(0, Math.min(1, ratio)) * 100}%`);
      header?.toggleAttribute('data-scrolled', window.scrollY > 12);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    );

    revealItems.forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${Math.min(index * 70, 280)}ms`);
      observer.observe(item);
    });

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      window.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
      observer.disconnect();
    };
  }, []);

  return <div data-scroll-progress className="scroll-progress" aria-hidden="true" />;
}
