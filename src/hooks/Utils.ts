import { useEffect, useState } from "react";

export const useUtils = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 1024
  );

  const handleWindowSizeChange = () => {
    setIsMobile(typeof window !== "undefined" && window.innerWidth < 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return {
    isMobile,
  };
};
