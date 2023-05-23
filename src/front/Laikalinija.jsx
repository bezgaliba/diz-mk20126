import React from 'react';
import './css/Laikalinija.css';
import imgen from './resources/timeline_en.png';
import imglv from './resources/timeline_lv.png';

const LaikaLinija = () => {
  return (
    <div className="timeline-container">
      <img
        src={imgen}
        alt="Laikalinija"
        className="timeline"
      />
    </div>
  );
};

export default LaikaLinija;