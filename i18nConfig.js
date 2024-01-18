const i18nConfig = {
    locales:['ua','ru', 'en'],
    defaultLocale: 'ua',
    localeDetector: (request, config) => {
        return 'ua';
    }
};

module.exports = i18nConfig;