import type { Metadata } from 'next';
import Awards2024 from "@/components/NewsCard/NewsItems/Awards2024";

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

    const slug = 'awards-2024';

    const seo = {
        uk: {
            title: 'Відзнаки найкращих спортсменів та тренерів року від КМФКК',
            description:
                'Нагородження спортсменів та учнів школи кіокушинкай карате Misak Dojo у 2024 році.',
        },

        en: {
            title: 'Awards for the best athletes and coaches of the year from KMFKK',
            description:
                'Awards ceremony for Misak Dojo Kyokushin Karate students and athletes in 2024.',
        },

        ru: {
            title: 'Награды лучшим спортсменам и тренерам года от КМФКК',
            description:
                'Награждение спортсменов и учеников школы киокушинкай карате Misak Dojo в 2024 году.',
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
    return <Awards2024 />;
};

export default Page;