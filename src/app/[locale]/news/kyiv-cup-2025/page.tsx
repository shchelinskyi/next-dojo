import type { Metadata } from 'next';
import KyivCup2025 from "@/components/NewsCard/NewsItems/KyivCup2025";

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

    const slug = 'kyiv-cup-2025';

    const seo = {
        uk: {
            title: 'Відкритий Кубок Києва з Кіокушинкай карате 2025',
            description:
                'Спортсмени Misak Dojo взяли участь у Відкритому Кубку Києва з Кіокушинкай карате 2025 — турнірі, присвяченому пам’яті «Янголів спорту» та справжньому духу карате.',
        },

        en: {
            title: 'Open Kyiv Kyokushin Karate Cup 2025',
            description:
                'Misak Dojo athletes participated in the Open Kyiv Kyokushin Karate Cup 2025, a tournament dedicated to the memory of the “Angels of Sport” and the true spirit of karate.',
        },

        ru: {
            title: 'Открытый Кубок Киева по Киокушинкай карате 2025',
            description:
                'Спортсмены Misak Dojo приняли участие в Открытом Кубке Киева по Киокушинкай карате 2025 — турнире, посвященном памяти «Ангелов спорта» и настоящему духу карате.',
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
    return <KyivCup2025 />;
};

export default Page;