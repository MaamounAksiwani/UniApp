import React, { useState, useEffect } from 'react';
import './index.css'; // You may need to adjust the import based on your project structure and styling

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 200; 
      setIsVisible(scrollY > scrollThreshold);
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button className="scrollToTopButton" onClick={scrollToTop}>
          Scroll to Top
        </button>
      )}
    </div>
  );
};

const ScrollToTop = () => {
  return (
    <div>
      
      <div >Scroll down...</div>

      {/* Scroll to top button */}
      <p>CLICK ME</p>
      <ScrollToTopButton />
    </div>
  );
};

export default ScrollToTop;
