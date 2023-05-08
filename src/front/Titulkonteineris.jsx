import react from 'react';
import './css/Titulkonteineris.css';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
import heroImage from './resources/title.jpg';

function Titulkonteineris() {

  const { t } = useTranslation();

  return (
    <div className='hero-image'>
      <img src={heroImage} alt='Hero Image' className='hero-img' />
      <div className='hero-text'>
        <h1>{t('HeroText')}</h1>
      </div>
    </div>
  );
}

export default Titulkonteineris;
