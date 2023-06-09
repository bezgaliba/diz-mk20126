import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import kvs from '../../assets/image/KVS.jpg';
import iekspagalms from '../../assets/image/pagalms.jpg';
import darbs from '../../assets/image/darbs.jpg';
import verm from '../../assets/image/verm.jpeg';
import LU from '../../assets/image/LU.jpeg';
import Barona from '../../assets/image/Barona.jpeg';
import { useTranslation } from 'react-i18next';
import './Slaidshovs.css'

const Slaidshovs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { t } = useTranslation();

  const images = [
    {
      src: iekspagalms,
      text: t('iekspagalms'),
    },
    {
      src: kvs,
      text: t('kvs'),
    },
    {
      src: darbs,
      text: t('darbs'),
    },
    {
      src: Barona,
      text: t('barona'),
    },
    {
      src: verm,
      text: t('verm'),
    },
    {
      src: LU,
      text: t('LU'),
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
      <h1 className="slideshow-header">{t('album')}</h1>
      <p className="slideshow-desc">{t("SlideDesc")}</p>
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