import { useState, useEffect } from 'react';

/**
 * Returns the CSS `top` value (in px) for a fixed navbar that sits below
 * a static topbar on desktop. As the user scrolls past the topbar, the
 * navbar slides up to top: 0 and stays there.
 *
 * On mobile (< 768px) the topbar is hidden, so always returns 0.
 *
 * @param topBarHeight - height of the topbar in px (desktop only, ~40px)
 */
export function useNavbarTop(topBarHeight: number) {
  const compute = () => {
    const isMd = window.innerWidth >= 768;
    if (!isMd) return 0;
    return Math.max(0, topBarHeight - window.scrollY);
  };

  const [top, setTop] = useState(0);

  useEffect(() => {
    const update = () => setTop(compute());
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [topBarHeight]);

  return top;
}
