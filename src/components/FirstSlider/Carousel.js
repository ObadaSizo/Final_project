// Carousel.js
import React, { useEffect, useRef, useState } from 'react';
import './FirstSlider.css';

const Carousel = ({ children }) => {
  const wrapperRef = useRef(null);
  const carouselRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const carousel = carouselRef.current;
    const firstCardWidth = carousel.querySelector('.card').offsetWidth;
    setCardWidth(firstCardWidth);

    // ... rest of the code from your JavaScript file ...
    // Replace DOM manipulation with React hooks and refs

    return () => {
      // Clean up any event listeners, timeouts, or intervals here
    };
  }, []);

  const handleArrowClick = (direction) => {
    const carousel = carouselRef.current;
    carousel.scrollLeft += direction === 'left' ? -cardWidth : cardWidth;
  };
  

  // ... rest of the event handlers ...

  return (
    <div className="wrapper " ref={wrapperRef}>
      <i className="arrow left fa-solid fa-angle-left" onClick={() => handleArrowClick('left')}></i>
      <div className="carousel" ref={carouselRef}>
        {children}
      </div>
      <i className="arrow right fa-solid fa-angle-right" onClick={() => handleArrowClick('right')}></i>
    </div>
  );
};

export default Carousel;