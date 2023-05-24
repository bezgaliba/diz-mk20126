import React from 'react';
import './css/Kajene.css';
import i18n from 'i18next';
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
        <img src={dflogo} alt="Birinu pils" className="logo" />
      </p>
    </footer>
  );
};

export default Footer;