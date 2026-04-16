import { useEffect, useRef, useState } from "react";

export function useInView() {
  const ref = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [showObserver, setShowObserver] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const r = entry.intersectionRatio;

        if (r >= 0.1 && !showLeft) {
          setShowLeft(true);
        }

        if (r >= 0.2 && !showRight) {
          setShowRight(true);
          observer.disconnect(); // stop observing
        }

        if (r >= 0.1 && !showObserver) {
          setShowObserver(true);
        }
      },
      { threshold: [0.1, 0.2] },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [showLeft, showRight]);

  return { ref, showLeft, showRight, showObserver };
}

// function useInViewThreshold(threshold = 0.8) {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.intersectionRatio >= threshold) {
//           setIsVisible(true);
//           observer.disconnect(); // run once
//         }
//       },
//       { threshold }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => observer.disconnect();
//   }, [threshold]);

//   return [ref, isVisible];
// }
