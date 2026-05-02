import { useEffect } from "react";
import { useLocation } from "react-router";

function scrollToHash(hash) {
  const target = document.querySelector(hash);

  if (!target) {
    return false;
  }

  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  return true;
}

export default function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const { hash, pathname } = location;

    if (hash) {
      const handleHashScroll = () => {
        if (!scrollToHash(hash)) {
          window.setTimeout(() => {
            scrollToHash(hash);
          }, 120);
        }
      };

      handleHashScroll();
      return undefined;
    }

    window.scrollTo({
      top: 0,
      behavior: pathname === "/" ? "smooth" : "auto",
    });

    return undefined;
  }, [location]);

  return null;
}
