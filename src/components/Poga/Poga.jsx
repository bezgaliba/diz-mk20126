import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Poga = () => {
  const [showButton, setShowButton] = useState(false);

  const { t } = useTranslation();

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowButton(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <button
      className={`scroll-to-top-button ${showButton ? 'show' : ''}`}
      onClick={scrollToTop}
      title={t("scrollMe")}
    >
      &#8593;
    </button>
  );
};

export default Poga;