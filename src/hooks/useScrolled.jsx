import { useEffect, useState } from "react";

const useScrolled = (intersectionRatio) => {
  const valueFromTop = intersectionRatio ? intersectionRatio : 0;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrolled = () => {
      if (window.scrollY > valueFromTop) setIsScrolled(true);
      if (window.scrollY === valueFromTop) setIsScrolled(false);
    };
    window.addEventListener("scroll", scrolled);
    return () => {
      window.removeEventListener("scroll", scrolled);
    };
  }, []);
  return isScrolled;
};

export default useScrolled;
