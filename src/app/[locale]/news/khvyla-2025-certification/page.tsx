import type { Metadata } from 'next';
import Khvyla2025Certification from "@/components/NewsCard/NewsItems/Khvyla2025Certification";

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

    const slug = 'khvyla-2025-certification';

    const seo = {
        uk: {
            title: 'Хвиля 2025 — Атестація з Кіокушинкай карате',
            description:
                'Учні Misak Dojo успішно пройшли атестацію «Хвиля 2025», продемонструвавши силу духу, витривалість і готовність до нових етапів на шляху Кіокушинкай карате.',
        },

        en: {
            title: 'Khvyla 2025 — Kyokushin Karate Grading',
            description:
                'Misak Dojo students successfully passed the “Khvyla 2025” Kyokushin Karate grading, demonstrating endurance, fighting spirit, and dedication to self-improvement.',
        },

        ru: {
            title: 'Хвыля 2025 — Аттестация по Киокушинкай карате',
            description:
                'Ученики Misak Dojo успешно прошли аттестацию «Хвыля 2025», продемонстрировав силу духа, выносливость и готовность двигаться дальше по пути Киокушинкай карате.',
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
    return <Khvyla2025Certification />;
};

export default Page;