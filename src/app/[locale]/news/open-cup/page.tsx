import type { Metadata } from 'next';
import OpenCup from "@/components/NewsCard/NewsItems/OpenCup";

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

    const slug = 'open-cup';

    const seo = {
        uk: {
            title: '4-й Кубок Києва з кіокушинкай карате — КАТА',
            description:
                'Спортсмени Misak Dojo успішно виступили на 4-му Кубку Києва з кіокушинкай карате у розділі «КАТА», здобувши золоті, срібні та бронзові нагороди.',
        },

        en: {
            title: '4th Kyiv Kyokushin Karate Cup — Kata',
            description:
                'Misak Dojo athletes successfully competed at the 4th Kyiv Kyokushin Karate Cup in the Kata division, winning gold, silver, and bronze medals.',
        },

        ru: {
            title: '4-й Кубок Киева по киокушинкай карате — КАТА',
            description:
                'Спортсмены Misak Dojo успешно выступили на 4-м Кубке Киева по киокушинкай карате в разделе «КАТА», завоевав золотые, серебряные и бронзовые награды.',
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
    return <OpenCup />;
};

export default Page;