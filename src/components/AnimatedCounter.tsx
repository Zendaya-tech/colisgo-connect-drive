import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter = ({
  value,
  suffix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour vérifier si l'élément est visible
  const checkVisibility = () => {
    if (ref.current && !isVisible) {
      const rect = ref.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    // Vérification initiale
    checkVisibility();

    // Fallback pour mobile - déclencher après un délai si pas encore visible
    const fallbackTimer = setTimeout(() => {
      if (!isVisible) {
        setIsVisible(true);
      }
    }, 2000);

    // Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          clearTimeout(fallbackTimer);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px", // Marge positive pour déclencher plus tôt sur mobile
      }
    );

    // Scroll listener comme backup pour mobile
    const handleScroll = () => {
      checkVisibility();
    };

    if (ref.current) {
      observer.observe(ref.current);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(fallbackTimer);
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;
    const endValue = value;
    const animationDuration = duration * 1000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(
        startValue + (endValue - startValue) * easeOut
      );

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
