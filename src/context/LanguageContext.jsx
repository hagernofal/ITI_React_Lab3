import { useState } from 'react';
import { LanguageContext } from './useLanguage';

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === 'en' ? 'ar' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider; 