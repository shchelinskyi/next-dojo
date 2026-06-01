import type { Metadata } from 'next';
import Enerkid from "@/components/NewsCard/NewsItems/Enerkid";

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

    const slug = 'enerkid';

    const seo = {
        uk: {
            title: 'Кубок Enerkid 2018',
            description:
                'Команда «Місак Доджо» успішно виступила на турнірі Enerkid 2018 з кіокушинкай карате, здобувши золоті, срібні та бронзові нагороди.',
        },

        en: {
            title: 'Enerkid Cup 2018',
            description:
                'The Misak Dojo team achieved strong results at the Enerkid 2018 Kyokushin Karate tournament, winning gold, silver, and bronze medals.',
        },

        ru: {
            title: 'Кубок Enerkid 2018',
            description:
                'Команда «Мисак Доджо» успешно выступила на турнире Enerkid 2018 по киокушинкай карате, завоевав золотые, серебряные и бронзовые награды.',
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
    return <Enerkid />;
};

export default Page;