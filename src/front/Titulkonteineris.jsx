import React, { useRef }  from 'react';
import './css/Titulkonteineris.css';
import { useTranslation } from 'react-i18next';
import heroImage from './resources/heroimg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Titulkonteineris(props) {
  const { t } = useTranslation();
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="hero-image">
      <img src={heroImage} alt="HeroImage" className="hero-img" />
      <div className="hero-text">
        <h1>{t('HeroText')}</h1>
        <div className="down-arrow">
          <FontAwesomeIcon icon={faChevronDown} size="3x" onClick={handleClick} />
        </div>
      </div>
    </div>
    <div ref={ref} />
    </>
  );
}

export default Titulkonteineris;
