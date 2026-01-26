import { useEffect, useRef, useState } from "react";

export function useInView() {
  const ref = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const r = entry.intersectionRatio;

        if (r >= 0.1 && !showLeft) {
          setShowLeft(true);
        }

        if (r >= 0.6 && !showRight) {
          setShowRight(true);
          observer.disconnect(); // stop observing
        }
      },
      { threshold: [0.1, 0.6] },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [showLeft, showRight]);

  return { ref, showLeft, showRight };
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
