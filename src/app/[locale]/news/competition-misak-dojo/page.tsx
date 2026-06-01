import type { Metadata } from 'next';
import CompetitionMisakDojo from "@/components/NewsCard/NewsItems/CompetitionMisakDojo";

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

    const slug = 'competition-misak-dojo';

    const seo = {
        uk: {
            title: 'Змагання Misak Dojo — клубний турнір 2025',
            description:
                '04 жовтня 2025 року відбулися змагання клубу Misak Dojo — день сили, витримки та справжнього бойового духу для всіх учасників.',
        },

        en: {
            title: 'Misak Dojo Tournament — Club Competition 2025',
            description:
                'On October 4, 2025, the Misak Dojo club competition took place — a day of strength, endurance, and true fighting spirit for all participants.',
        },

        ru: {
            title: 'Соревнования Misak Dojo — клубный турнир 2025',
            description:
                '04 октября 2025 года состоялись соревнования клуба Misak Dojo — день силы, выносливости и настоящего боевого духа для всех участников.',
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
    return <CompetitionMisakDojo />;
};

export default Page;