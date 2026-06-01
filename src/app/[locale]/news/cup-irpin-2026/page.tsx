import type { Metadata } from 'next';
import CupIrpin2026 from "@/components/NewsCard/NewsItems/CupIrpin2026";

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

    const slug = 'cup-irpin-2026';

    const seo = {
        uk: {
            title: 'Кубок Княгині Ольги, м. Ірпінь 2026 — новини турніру',
            description:
                'Новини та результати турніру Кубок Княгині Ольги 2026 з кіокушинкай карате від Misak Dojo.',
        },

        en: {
            title: 'Princess Olga Cup, Irpin city 2026 — Tournament News',
            description:
                'News and results of the Princess Olga Cup 2026 Kyokushin Karate tournament by Misak Dojo.',
        },

        ru: {
            title: 'Кубок Княгини Ольги, г. Ирпинь 2026 — новости турнира',
            description:
                'Новости и результаты турнира Кубок Княгини Ольги 2026 по киокушинкай карате от Misak Dojo.',
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
    return <CupIrpin2026 />;
};

export default Page;