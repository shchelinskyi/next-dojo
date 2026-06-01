import type { Metadata } from 'next';
import KarateDay from "@/components/NewsCard/NewsItems/KarateDay";

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

    const slug = 'karate-day';

    const seo = {
        uk: {
            title: '7 жовтня — Всесвітній день карате',
            description:
                'Спортивний клуб «Місак Доджо» вітає всіх каратистів із Всесвітнім днем карате — днем сили духу, поваги та вірності Шляху Кіокушинкай.',
        },

        en: {
            title: 'October 7 — World Karate Day',
            description:
                'Misak Dojo congratulates all karate practitioners on World Karate Day — a celebration of spirit, respect, and dedication to the Kyokushin Karate path.',
        },

        ru: {
            title: '7 октября — Всемирный день карате',
            description:
                'Спортивный клуб «Мисак Доджо» поздравляет всех каратистов с Всемирным днем карате — днем силы духа, уважения и верности пути Киокушинкай.',
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
    return <KarateDay />;
};

export default Page;