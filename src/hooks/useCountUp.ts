import { useState, useEffect, useRef } from "react";

export interface UseCountUpOptions {
  end: number;
  duration?: number;
  decimals?: number;
  startAnimation?: boolean;
}

/**
 * Custom hook for animating count-up numbers
 * @param end - The target number to count up to
 * @param duration - Animation duration in milliseconds (default: 2000)
 * @param decimals - Number of decimal places (default: 0)
 * @param startAnimation - Whether to start the animation (default: false)
 * @returns The current animated count value
 */
export const useCountUp = (
  end: number,
  duration: number = 2000,
  decimals: number = 0,
  startAnimation: boolean = false
): number => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = end * easeOutQuart;

      setCount(Number(currentCount.toFixed(decimals)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, decimals, startAnimation]);

  return count;
};

export interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
}

/**
 * Custom hook for observing element intersection
 * @param options - IntersectionObserver options
 * @returns A ref to attach to the element and visibility state
 */
export const useIntersectionObserver = <T extends HTMLElement = HTMLElement>(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<T | null>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: options.threshold ?? 0.3, ...options }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible, options]);

  return [ref, isVisible];
};
