import { useEffect } from 'react';

export default function ScrollPolish() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>('[data-site-header]');
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    const updateHeaderState = () => {
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

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateHeaderState);
      observer.disconnect();
    };
  }, []);

  return null;
}
