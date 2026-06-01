import type { Metadata } from 'next';
import ChildTraining from "@/components/NewsCard/NewsItems/ChildTraining";

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

    const slug = 'child-training';

    const seo = {
        uk: {
            title: 'Кіокушинкай карате для дітей — тренування в Misak Dojo',
            description:
                'Школа кіокушинкай карате Misak Dojo запрошує дітей від 4-х років на тренування. Розвиток характеру, дисципліни, сили духу та впевненості.',
        },

        en: {
            title: 'Kyokushin Karate for Children — Training at Misak Dojo',
            description:
                'Misak Dojo Kyokushin Karate School invites children from 4 years old to join training sessions focused on discipline, confidence, character, and spirit.',
        },

        ru: {
            title: 'Киокушинкай карате для детей — тренировки в Misak Dojo',
            description:
                'Школа киокушинкай карате Misak Dojo приглашает детей от 4 лет на тренировки. Развитие характера, дисциплины, силы духа и уверенности.',
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
    return <ChildTraining />;
};

export default Page;