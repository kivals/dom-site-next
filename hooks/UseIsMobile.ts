"use client";
import { useEffect, useState } from "react";

const useIsMobile = (breakpoint = 640) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkForDevice = () => window.innerWidth < breakpoint;

    const handlePageResized = () => {
      setIsMobile(checkForDevice());
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handlePageResized);
      window.addEventListener("orientationchange", handlePageResized);
      window.addEventListener("load", handlePageResized);
      window.addEventListener("reload", handlePageResized);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handlePageResized);
        window.removeEventListener("orientationchange", handlePageResized);
        window.removeEventListener("load", handlePageResized);
        window.removeEventListener("reload", handlePageResized);
      }
    };
  }, []);

  return {
    isMobile,
  };
};

export default useIsMobile;
