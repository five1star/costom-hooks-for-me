import { useEffect, useState } from "react";

export enum SCROLL_DIRECTION {
  UP = "up",
  DOWN = "down",
}

const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState<SCROLL_DIRECTION>(
    SCROLL_DIRECTION.DOWN
  );

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      setScrollDir(
        scrollY > lastScrollY ? SCROLL_DIRECTION.DOWN : SCROLL_DIRECTION.UP
      );
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return scrollDir;
};

export default useScrollDirection;
