import type { Metadata } from 'next';
import Khvyla2025 from "@/components/NewsCard/NewsItems/Khvyla2025";

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

    const slug = 'khvyla-2025';

    const seo = {
        uk: {
            title: 'Хвиля 2025 — навчально-тренувальні збори',
            description:
                'Чотири дні навчально-тренувальних зборів «Хвиля 2025»: інтенсивні тренування, куміте, командна робота та підготовка до атестації у Кіокушинкай карате.',
        },

        en: {
            title: 'Khvyla 2025 — Training Camp',
            description:
                'Four days of the “Khvyla 2025” training camp: intense workouts, kumite, teamwork, and preparation for Kyokushin Karate grading exams.',
        },

        ru: {
            title: 'Хвыля 2025 — учебно-тренировочные сборы',
            description:
                'Четыре дня учебно-тренировочных сборов «Хвыля 2025»: интенсивные тренировки, кумите, командная работа и подготовка к аттестации по Киокушинкай карате.',
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
    return <Khvyla2025 />;
};

export default Page;