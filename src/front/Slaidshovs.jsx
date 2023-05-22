import React, { useState } from 'react';
import './css/Slaidshovs.css';

const Slaidshovs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: 'https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4',
      text: 'non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."'
    },
    {
      src: 'https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY',
      text: 'Image 2'
    },
    {
      src: 'https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4',
      text: 'Image 3'
    },
    {
      src: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
      text: 'Image 4'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slideshow">
      <div className="slide">
        <img className="slideimg" src={images[currentIndex].src} alt={`Slide ${currentIndex}`} />
        <div className="highlighted-text">{images[currentIndex].text}</div>
      </div>
      <div className="navigation">
        <button className="arrow prev" onClick={handlePrev}>
          &lt;
        </button>
        <button className="arrow next" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slaidshovs;