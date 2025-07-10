import { useState, useEffect } from "react";

export function useHydrated() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated;
}

export function useInViewWithHydration(ref, options = {}) {
  const [isInView, setIsInView] = useState(false);
  const isHydrated = useHydrated();

  useEffect(() => {
    if (!isHydrated || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, isHydrated, options]);

  return isInView;
}
