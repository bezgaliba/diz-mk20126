import React, { useState } from 'react';

function SetLangIcon(props) {
    const { currentLanguage } = props;

    const langIconSrc = currentLanguage === 'en' ? 'https://i.imgur.com/8ceIo9s.png' : 'https://i.imgur.com/aJOcEkz.png';

    return (
        <img src={langIconSrc} />
    );
}
  
export default SetLangIcon;