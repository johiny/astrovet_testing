import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition()
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

// hook to go to the top every time the link change

const useGoTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  },[pathname])
}

export {useScrollPosition, useGoTop}