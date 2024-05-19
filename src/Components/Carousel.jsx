// src/Carousel.js
import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const images = [
    'https://source.unsplash.com/1000x900?coffee',
    'https://source.unsplash.com/1000x900?html',
    'https://source.unsplash.com/1000x900?scenery',
    'https://source.unsplash.com/1000x900?dog',
    'https://source.unsplash.com/1000x900?india',
    'https://source.unsplash.com/1000x900?food',
    'https://source.unsplash.com/1000x900?computer',
    'https://source.unsplash.com/1000x900?odisha',
    'https://source.unsplash.com/1000x900?bird',
    'https://source.unsplash.com/1000x900?tiger',
    'https://source.unsplash.com/1000x900?wildlife',
    'https://source.unsplash.com/1000x900?technology'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex===0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setTranslateValue(-(newIndex * 100));
  };

  const goToNext = () => {
    
    const newIndex =currentIndex === images.length - 1? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setTranslateValue(-(newIndex * 100));
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="left-arrow" onClick={goToPrevious}>
        &#10094;
      </div>
      <div className="carousel-slide" style={{ transform: `translateX(${translateValue}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} />
        ))}
        
      </div>
      <div className="right-arrow" onClick={goToNext}>
        &#10095;
      </div>
    </div>
  );
};

export default Carousel;
