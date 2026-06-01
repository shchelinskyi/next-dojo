import type { Metadata } from 'next';
import Championship from "@/components/NewsCard/NewsItems/Championship";

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

    const slug = 'championship';

    const seo = {
        uk: {
            title: 'Чемпіонат Житомирської області з кіокушинкай карате — результати Misak Dojo',
            description:
                'Учні спортивного клубу Misak Dojo здобули призові місця на Відкритому чемпіонаті Житомирської області з кіокушинкай карате у Новограді-Волинському.',
        },

        en: {
            title: 'Zhytomyr Region Kyokushin Karate Championship — Misak Dojo Results',
            description:
                'Students of the Misak Dojo sports club won prize places at the Open Zhytomyr Region Kyokushin Karate Championship in Novohrad-Volynskyi.',
        },

        ru: {
            title: 'Чемпионат Житомирской области по киокушинкай карате — результаты Misak Dojo',
            description:
                'Ученики спортивного клуба Misak Dojo завоевали призовые места на Открытом чемпионате Житомирской области по киокушинкай карате в Новограде-Волынском.',
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
    return <Championship />;
};

export default Page;