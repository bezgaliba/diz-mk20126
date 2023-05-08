import react, { useRef  } from 'react';
import './css/ParMani.css';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

function ParMani() {

    const { t } = useTranslation();

    return (
      <>
        <div className="myStory">
          <h1 className="">
            {t('myStory')}!
          </h1>
        </div>
      </>
    );
  }

export default ParMani;