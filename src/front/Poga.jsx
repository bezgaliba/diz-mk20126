import React, { useState } from 'react';
import './css/Poga.css';

const Poga = () => {
  const [showButton, setShowButton] = useState(false);

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
      title="Scroll To Top"
    >
      &#8593;
    </button>
  );
};

export default Poga;