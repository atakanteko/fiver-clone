import { useState, useEffect } from "react";

// const options = {
//   root: null,
//   rootMargin: "0px",
//   threshold: [0.3, 1],
// };

const useIntersectionObserver = (element, options) => {
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!element?.current) {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIntersecting(entry.isIntersecting);
      });
    }, options);

    observer.observe(element.current);

    // eslint-disable-next-line consistent-return
    return () => {
      if (!element?.current) {
        return;
      }
      observer?.unobserve(element.current);
    };
  }, [options]);

  return intersecting;
};

export default useIntersectionObserver;
