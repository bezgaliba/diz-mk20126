import react, { useRef  } from 'react';
import './css/ParMani.css';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import es from './resources/me.jpg';

function ParMani() {

    const { t } = useTranslation();

    return (
      <>
        <div className="about-me-items">
          <div className="about-me">
            <div className="image-grid">
              <div className="image-container">
                <img className="es" src={es} alt="es" />
              </div>
            </div>
            <div className="paragraph-grid">
              <div className="paragraph-header">
                <p className='paragraph-header-top'>Chapter 1 - <b>The Journey</b></p><p>sis ir virsraksts vizualizacijai</p>
              </div>
              <div className="paragraph-container">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a lorem vitae nunc sollicitudin luctus ac in erat. Aenean euismod magna quis eros laoreet elementum.</p>
              </div>
              <div className="paragraph-container">
                <p>Phasellus tristique dolor vel arcu posuere, eu rutrum quam bibendum. Curabitur vel justo eget mi efficitur malesuada. Duis eget feugiat massa.</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

export default ParMani;