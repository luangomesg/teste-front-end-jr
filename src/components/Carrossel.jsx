import React, { useState } from 'react';

const Carrossel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <div className='carousel-all'>
        <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide">{slide}</div>
          ))}
        </div>
        <div className='carousel-infos'>
          infos
          infos
          infos
        </div>
      </div>
      <button className="prev-button" onClick={prevSlide}>Anterior</button>
      <button className="next-button" onClick={nextSlide}>Próximo</button>
    </div>
  );
};

export default Carrossel;
