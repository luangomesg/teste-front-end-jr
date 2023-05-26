import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


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
        <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide">
              <img src={slide.photo} alt="phone" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p className='line'>R$ 30,90</p>
              <p>R$ 28,90</p>
              <p>ou 2x de R$ 49,95 sem juros</p>
              <p>Frete grátis</p>
              <button>Comprar</button>
            </div>
          ))}
        </div>
      </div>
      <button className="prev-button arrow-button" onClick={prevSlide}><FontAwesomeIcon icon={faChevronLeft} /></button>
      <button className="next-button arrow-button" onClick={nextSlide}> <FontAwesomeIcon icon={faChevronRight} /></button>
    </div>
  );
};

export default Carrossel;
