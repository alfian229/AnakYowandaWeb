import React from 'react';
import { useTranslation } from 'react-i18next';

export function MyComponent() {
    const {t, i18n} = useTranslation();
    function TranslateClick(lang) {
        i18n.changeLanguage(lang);
    }
    return(
        <div>
          <button onClick={()=>TranslateClick('id')}></button>
       </div>
      )
}