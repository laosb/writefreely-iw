i18next
    .use(I18nextFetchBackend)
    .use(i18nextBrowserLanguageDetector)
    .init({
        fallbackLng: {
            'zh-TW': ['zh'],
            'zh-Hant': ['zh'],
            'zh-Hans': ['zh-CN'],
            'default': ['en']
        },
        whitelist: ['en', 'zh-CN', 'zh'],
        backend: {
            loadPath: '/js/locales/{{lng}}.json'
        }
    }).then(function (t) {
        window.localize = locI18next.init(i18next, { useOptionsAttr: true })
        localize('body')
    })
