import type { Metadata } from 'next';
import CherkasyOblastCup from "@/components/NewsCard/NewsItems/CherkasyOblastCup";

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

    const slug = 'cherkasy-oblast-cup';

    const seo = {
        uk: {
            title: 'Кубок Черкаської області — перемоги спортсменів Misak Dojo',
            description:
                'Спортсмени клубу Misak Dojo здобули золото, срібло та бронзу на Відкритому чемпіонаті Черкаської області з Кіокушинкай карате.',
        },

        en: {
            title: 'Cherkasy Region Cup — Misak Dojo Athletes Victories',
            description:
                'Misak Dojo athletes won gold, silver, and bronze medals at the Open Kyokushin Karate Championship of the Cherkasy region.',
        },

        ru: {
            title: 'Кубок Черкасской области — победы спортсменов Misak Dojo',
            description:
                'Спортсмены клуба Misak Dojo завоевали золото, серебро и бронзу на Открытом чемпионате Черкасской области по Киокушинкай карате.',
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
    return <CherkasyOblastCup  />;
};

export default Page;