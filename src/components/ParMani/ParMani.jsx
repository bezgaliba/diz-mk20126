import React from 'react';
import { useTranslation } from 'react-i18next';
import es from '../../assets/image/me.jpeg';

function ParMani() {

    const { t } = useTranslation();

    return (
      <div id="par-mani">
        <div className="about-me-items">
          <div className="about-me">
            <div className="image-grid">
              <div className="image-container">
                <img className="es" src={es} alt="es" />
              </div>
            </div>
            <div className="paragraph-grid">
              <div className="paragraph-header">
                <p className='paragraph-header-top'><b>{t('Ieskats')}</b>{t('Manadzive')}</p><p>{t('Welcome')}</p>
              </div>
              <div className="paragraph-container">
                <p>{t('Aboutme')}</p>
              </div>
              <div className="paragraph-container">
                <p>{t('Insight')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default ParMani;