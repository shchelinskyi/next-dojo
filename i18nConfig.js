const i18nConfig = {
    locales:['uk','ru', 'en'],
    defaultLocale: 'uk',
    localeDetector: (request, config) => {
        return 'uk';
    }
};

module.exports = i18nConfig;