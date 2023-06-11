import React, { useState, useEffect } from 'react';

const Slider = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  function plusSlides(n) {
    setSlideIndex((prevSlideIndex) => prevSlideIndex + n);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  function showSlides(n) {
    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    }
  }

  return (
    <div>
      {slides.map((slide, index) => (
        <div
          key={index}
          className="mySlides"
          style={{ display: slideIndex === index + 1 ? 'block' : 'none' }}
        >
          {slide}
        </div>
      ))}
      <button className='prev fa-solid fa-angle-left' onClick={() => plusSlides(-1)}></button>
      <button className='next fa-solid fa-angle-right' onClick={() => plusSlides(1)}></button>
    </div>
  );
};

export default Slider;