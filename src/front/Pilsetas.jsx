import React, { useState } from 'react';
import './css/Pilsetas.css';
import { useTranslation } from 'react-i18next';
import birini from './resources/birini.png';
import ragana from './resources/ragana.png';
import senite from './resources/senite.jpg';
import vangazi from './resources/vangazi.png';

function Pilsetas() {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedHeading, setSelectedHeading] = useState('');
  const [selectedText, setSelectedText] = useState('');

  const openModal = (image, heading, text, t) => {
    setSelectedImage(image);
    setSelectedHeading(heading);
    setSelectedText(text);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div id="Pilsetas">
      <div className="cont">
        <div className="textContainer">
          <span className="text">
            <h1 className="headingP">{t('PilsTitle')}</h1>
            <p className="descP">{t('PilsDesc')}</p>
          </span>
        </div>
        <div className="imageContainer">
        <div className="imageItem" onClick={() => openModal(birini, 'Bīriņi', t('Birini'))}>
            <img src={birini} alt="Birinu pils" className="image" />
            <h2 className="imageCaption">Bīriņi</h2>
          </div>
          <div className="imageItem" onClick={() => openModal(ragana, 'Ragana', t('Ragana'))}>
            <img src={ragana} alt="Raganas kekis" className="image" />
            <h2 className="imageCaption">Ragana</h2>
          </div>
          <div className="imageItem" onClick={() => openModal(senite, 'Sēnīte', t('Senite'))}>
            <img src={senite} alt="Senites restorans" className="image" />
            <h2 className="imageCaption">Sēnīte</h2>
          </div>
          <div className="imageItem" onClick={() => openModal(vangazi, 'Vangaži', t('Vangazi'))}>
            <img src={vangazi} alt="Vangazi grafiti" className="image" />
            <h2 className="imageCaption">Vangaži</h2>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="modalContainer">
          <div className="modalBackground" onClick={closeModal}></div>
          <div className="modalContent">
            <p className="modalText">{selectedHeading}</p>
            <img src={selectedImage} alt={selectedText} className="modalImage" />
            <p className="modalText">{selectedText}</p>
            <button className="modalCloseButton" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pilsetas;