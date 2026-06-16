import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const timeout = setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
    }, 50);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
