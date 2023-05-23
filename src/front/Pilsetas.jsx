import React, { useState } from 'react';
import './css/Pilsetas.css';
import i18n from 'i18next';
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

  const openModal = (image, heading, text) => {
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
            Šeit ir arī apskatāmi interesanti ciemi, kam es ikdienā pabraucu garām. Ļoti mīļi
          </span>
        </div>
        <div className="imageContainer">
          <div className="imageItem" onClick={() => openModal(birini, 'Bīriņi', 'Šī ir mana bērnība! :) 1')}>
            <img src={birini} alt="Birinu pils" className="image" />
            <h2 className="imageCaption">Bīriņi</h2>
          </div>
          <div className="imageItem" onClick={() => openModal(ragana, 'Ragana', 'Šī ir mana bērnība! :) 2 ')}>
            <img src={ragana} alt="Raganas kekis" className="image" />
            <h2 className="imageCaption">Ragana</h2>
          </div>
          <div className="imageItem" onClick={() => openModal(senite, 'Sēnīte', 'Šī ir mana bērnība! :) 3')}>
            <img src={senite} alt="Senites restorans" className="image" />
            <h2 className="imageCaption">Sēnīte</h2>
          </div>
          <div className="imageItem" onClick={() => openModal(vangazi, 'Vangaži', 'Šī ir mana bērnība! :) 4')}>
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