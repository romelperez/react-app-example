import i18next from 'i18next';
import en from './resources/en';
import es from './resources/es';

/**
 * @module {Object} i18n
 * @description The base instance of i18next module for internationalization and
 * localization.
 */
i18next.init({
  lng: 'en',
  fallbackLng: 'en',
  resources: { en, es }
});

export default i18next;
