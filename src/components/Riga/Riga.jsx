
import React from 'react';
import { useTranslation } from 'react-i18next';
import mework from '../../assets/image/mework.jpg';
import meBP from '../../assets/image/meBP.jpeg';
import './Riga.css'

function Riga (){
  const { t } = useTranslation();
    
    return(
    <div id="Riga">
      <div className="square-container">
        <h1 className='riga-head'>{t("RigaTitle")}</h1>
        <div className="row-cont">
          <img src={meBP} alt="bildite1" className="imageDesc2" />
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