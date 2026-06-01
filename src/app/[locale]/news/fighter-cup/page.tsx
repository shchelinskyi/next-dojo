import type { Metadata } from 'next';
import FighterCup from "@/components/NewsCard/NewsItems/FighterCup";

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

    const slug = 'fighter-cup';

    const seo = {
        uk: {
            title: 'Відкритий кубок СК «Файтер» 2019',
            description:
                'Юні каратисти клубу «Місак Доджо» успішно виступили на Відкритому кубку СК «Файтер» 2019 з куміте та ката, здобувши призові місця й цінний змагальний досвід.',
        },

        en: {
            title: 'Open Fighter Club Cup 2019',
            description:
                'Young karate athletes from Misak Dojo achieved strong results at the Open Fighter Club Cup 2019 in kumite and kata, earning medals and valuable tournament experience.',
        },

        ru: {
            title: 'Открытый кубок СК «Файтер» 2019',
            description:
                'Юные каратисты клуба «Мисак Доджо» успешно выступили на Открытом кубке СК «Файтер» 2019 по кумите и ката, завоевав призовые места и ценный соревновательный опыт.',
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
    return <FighterCup />;
};

export default Page;