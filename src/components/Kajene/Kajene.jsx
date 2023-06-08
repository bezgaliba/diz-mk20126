import React from 'react';
import { useTranslation } from 'react-i18next';
import dflogo from '../../assets/image/01_DF_logo_LV.png';
import './Kajene.css'


function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <p className="footer-text">
        {t("footerNote")}
        <br></br><br></br>
        <i><a href="https://github.com/bezgaliba/diz-mk20126" className="link">github.com/bezgaliba </a></i><span className='dot'>x</span>
        <i><a href="https://www.df.lu.lv/" className="link">LU DF </a></i>
      </p>
    </footer>
  );
};

export default Footer;