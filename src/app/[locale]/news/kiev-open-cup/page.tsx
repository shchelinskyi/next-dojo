import type { Metadata } from 'next';
import KievOpenCup from "@/components/NewsCard/NewsItems/KievOpenCup";

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

    const slug = 'kiev-open-cup';

    const seo = {
        uk: {
            title: 'Kyiv Open Cup 2018',
            description:
                'Спортсмени Misak Dojo успішно виступили на турнірі Kyiv Open Cup 2018, здобувши золоті, срібні та бронзові медалі й виборовши третє командне місце.',
        },

        en: {
            title: 'Kyiv Open Cup 2018',
            description:
                'Misak Dojo athletes successfully competed at Kyiv Open Cup 2018, winning gold, silver, and bronze medals and earning third place in the team standings.',
        },

        ru: {
            title: 'Kyiv Open Cup 2018',
            description:
                'Спортсмены Misak Dojo успешно выступили на турнире Kyiv Open Cup 2018, завоевав золотые, серебряные и бронзовые медали, а также третье командное место.',
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
    return <KievOpenCup />;
};

export default Page;