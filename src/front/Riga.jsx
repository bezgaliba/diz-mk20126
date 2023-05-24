
import React from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import './css/Riga.css';
import mework from './resources/mework.jpg';
import meverm from './resources/meverm.jpg';

function Riga (){
  const { t } = useTranslation();
    
    return(
    <div id="Riga">
      <div className="square-container">
        <div className="row-cont">
          <img src={meverm} alt="bildite1" className="imageDesc2" />
          <div className="textDesc1">{t("RigaDesc1")}</div>
        </div>
        <div className="row-cont">
          <div className="textDesc2">{t("RigaDesc2")}</div>
          <img src={mework}  alt="bildite2" className="imageDesc1" />
        </div>
      </div>
    </div>
)};

export default Riga;