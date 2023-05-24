import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './css/Slaidshovs.css';
import kvs from './resources/KVS.jpg';
import iekspagalms from './resources/pagalms.jpg';
import darbs from './resources/darbs.jpg';
import darbs2 from './resources/darbs2.jpeg';
import senite from './resources/senite_length.jpg';

const Slaidshovs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    {
      src: iekspagalms,
      text:
        'non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."',
    },
    {
      src: kvs,
      text: 'Image 2',
    },
    {
      src: senite,
      text: 'Image 2',
    },
    {
      src: darbs2,
      text: 'Image 3',
    },
    {
      src: darbs,
      text: 'Image 4',
    },
  ];

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }
  };

  useEffect(() => {
    const transitionTimeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(transitionTimeout);
  }, [currentIndex]);

  return (
    <div id="Slaidshovs">
      <div className="slideshow">
        {images.map((image, index) => (
          <div className={`slide ${index === currentIndex ? 'active' : ''}`} key={index}>
            <img className="slideimg" src={image.src} alt={`Slide ${index}`} />
            <div className="highlighted-text">{image.text}</div>
          </div>
        ))}
        <div className="navigation">
          <button className="arrow prev" onClick={handlePrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="arrow next" onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slaidshovs;