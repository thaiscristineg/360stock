import { useState, useEffect } from 'react';

export default function useActiveSection(refs) {
  const [activeSection, setActiveSection] = useState('#overview');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const id = visible.target.getAttribute('id');
          if (id) setActiveSection(`#${id}`);
        }
      },
      {
        rootMargin: '-30% 0px -50% 0px', // Parte de cima com margem negativa ajuda a capturar melhor
        threshold: 0,
      }
    );

    const elements = Object.values(refs)
      .map(ref => ref?.current)
      .filter(Boolean);

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [refs]);

  return activeSection;
}
