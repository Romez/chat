import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export default i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          channels: {
            title: 'Channels',
            add: 'Add',
            modals: {
              close: 'Close',
              add: {
                title: 'Add channel',
                submit: 'Add',
                loading: 'Adding...',
              },
              rename: {
                title: 'Rename channel',
                submit: 'Rename',
                loading: 'Renaming...',
              },
              remove: {
                title: 'Remove channel',
                description: 'Channel will be removed',
                submit: 'Remove',
                loading: 'Removing...',
              },
            },
          },
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
