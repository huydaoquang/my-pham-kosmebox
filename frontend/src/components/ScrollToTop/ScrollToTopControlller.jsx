import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

import Button from "../Button/Button";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  //scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <div className="fixed right-3">
      {isVisible && (
        <Button
          className="bg-redCustom p-3 text-white rounded-md"
          onClick={handleScrollToTop}
          label={<AiOutlineArrowUp size={25} />}
        />
      )}
    </div>
  );
}
