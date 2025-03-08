import { useState, useEffect } from "react";

function ScrollToTopButtonMobile({ isScrolled }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 bg-purple-600 text-white p-2 rounded-full shadow-md transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      ⬆️
    </button>
  );
}

export default ScrollToTopButtonMobile;
