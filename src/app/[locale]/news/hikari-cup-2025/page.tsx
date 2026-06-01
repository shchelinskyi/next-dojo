import type { Metadata } from 'next';
import HikariCup2025 from "@/components/NewsCard/NewsItems/HikariCup2025";

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

    const slug = 'hikari-cup-2025';

    const seo = {
        uk: {
            title: 'Hikari Cup 2025',
            description:
                'Спортсмени Misak Dojo успішно виступили на турнірі Hikari Cup 2025, продемонструвавши силу характеру, дисципліну та високий рівень підготовки у поєдинках з найсильнішими бійцями України.',
        },

        en: {
            title: 'Hikari Cup 2025',
            description:
                'Misak Dojo athletes successfully competed at Hikari Cup 2025, demonstrating strong character, discipline, and a high level of preparation against top fighters from Ukraine.',
        },

        ru: {
            title: 'Hikari Cup 2025',
            description:
                'Спортсмены Misak Dojo успешно выступили на турнире Hikari Cup 2025, продемонстрировав силу характера, дисциплину и высокий уровень подготовки в поединках с сильнейшими бойцами Украины.',
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
    return <HikariCup2025 />;
};

export default Page;