
import type { Metadata } from 'next';
import ChampionshipKyiv2026 from "@/components/NewsCard/NewsItems/ChampionshipKyiv2026";

type Locale = 'uk' | 'en' | 'ru';

type Props = {
    params: {
        locale: Locale;
    };
};

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {

    const locale = params.locale;

    const slug = 'championship-kyiv-2026';

    const seo = {
        uk: {
            title: 'Чемпіонат Києва з кіокушинкай карате 2026 — результати Misak Dojo',
            description:
                '15 лютого 2026 року спортсмени Misak Dojo успішно виступили на Кубку Києва з кіокушинкай карате та здобули призові місця.',
        },

        en: {
            title: 'Kyiv Kyokushin Karate Championship 2026 — Misak Dojo Results',
            description:
                'On February 15, 2026, Misak Dojo athletes successfully competed at the Kyiv Kyokushin Karate Cup and won prize places.',
        },

        ru: {
            title: 'Чемпионат Киева по киокушинкай карате 2026 — результаты Misak Dojo',
            description:
                '15 февраля 2026 года спортсмены Misak Dojo успешно выступили на Кубке Киева по киокушинкай карате и завоевали призовые места.',
        },
    };

    const ogLocales = {
        uk: 'uk_UA',
        en: 'en_US',
        ru: 'ru_RU',
    };

    const localizedUrls = {
        uk: `/news/${slug}`,
        en: `/en/news/${slug}`,
        ru: `/ru/news/${slug}`,
    };

    const currentSeo = seo[locale] || seo.uk;

    const canonical = localizedUrls[locale] || localizedUrls.uk;

    return {
        title: currentSeo.title,

        description: currentSeo.description,

        alternates: {
            canonical,

            languages: {
                'uk-UA': localizedUrls.uk,
                'en-US': localizedUrls.en,
                'ru-RU': localizedUrls.ru,
                'x-default': localizedUrls.uk,
            },
        },

        openGraph: {
            title: currentSeo.title,

            description: currentSeo.description,

            url: canonical,

            siteName: 'Misak Dojo',

            locale: ogLocales[locale],

            type: 'article',

            images: [
                {
                    url: 'https://misakdojo.com/og-image.webp',
                    width: 1680,
                    height: 882,
                    alt: currentSeo.title,
                },
            ],
        },

        twitter: {
            card: 'summary_large_image',

            title: currentSeo.title,

            description: currentSeo.description,

            images: ['https://misakdojo.com/og-image.webp'],
        },
    };
}

const Page = () => {
    return <ChampionshipKyiv2026 />;
};

export default Page;