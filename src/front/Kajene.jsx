import React from 'react';
import './css/Kajene.css';
import { useTranslation } from 'react-i18next';
import dflogo from './resources/01_DF_logo_LV.png';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <p className="footer-text">
        {t("footerNote")}
        <br></br><br></br>
        <i><a href="https://github.com/bezgaliba/diz-mk20126" className="link">github.com/bezgaliba </a></i><span className='dot'>x</span>
        <a href="https://df.lu.lv/"><img src={dflogo} alt="Birinu pils" className="logo" /></a>
      </p>
    </footer>
  );
};

export default Footer;