import React, { useRef, useEffect } from 'react';
import './css/Laikalinija.css';
import imgen from './resources/timeline_en.png';
import imglv from './resources/timeline_lv.png';
import { useTranslation } from 'react-i18next';

const LaikaLinija = () => {
  const { t } = useTranslation();
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    });

    observer.observe(imageRef.current);

    return () => {
      observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <div className="timeline-container">
      <h1 className="heading">{t('Laikalinija')}</h1>
      <img
        ref={imageRef}
        src={imgen}
        alt="Laikalinija"
        className="timeline"
      />
    </div>
  );
};

export default LaikaLinija;