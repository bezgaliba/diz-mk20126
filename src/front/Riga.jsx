
import React from 'react';
import './css/Riga.css';
import birini from './resources/birini.png';
import ragana from './resources/ragana.png';

const Riga = () => {
    return(
    <div id="Riga">
      <div className="square-container">
        <div className="row-cont">
          <img src={birini} alt="bildite" className="imageDesc2" />
          <div className="textDesc">Text on the left</div>
        </div>
        <div className="row-cont">
          <div className="textDesc">Text on the right</div>
          <img src={ragana}  alt="Image 2" className="imageDesc1" />
        </div>
      </div>
    </div>
)};

export default Riga;