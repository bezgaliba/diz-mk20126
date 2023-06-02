import { setImgFadein } from 'Helper/setImgFadein';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import imgen from '../../assets/image/timeline_en.png';
import imglv from '../../assets/image/timeline_lv.png';

const LaikaLinija = () => {
  const { t, i18n } = useTranslation();
  const imageRef = useRef(null);

  useEffect(() => {
    setImgFadein(imageRef)
  }, []);

  const getImagePath = () => {
    return i18n.language === 'lv' ? imglv : imgen;
  };

  return (
    <div id="Laikalinija">
      <div className="timeline-container">
        <h1 className="heading">{t('Laikalinija')}</h1>
        <img
          ref={imageRef}
          src={getImagePath()}
          alt="Laikalinija"
          className="timeline"
        />
      </div>
    </div>
  );
};

export default LaikaLinija;