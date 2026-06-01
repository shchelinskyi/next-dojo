import type { Metadata } from 'next';
import KarateSea from "@/components/NewsCard/NewsItems/KarateSea";

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

    const slug = 'karate-sea';

    const seo = {
        uk: {
            title: 'Навчально-тренувальні збори в Южному',
            description:
                'Учні Misak Dojo взяли участь у навчально-тренувальних зборах у місті Южне: тренування біля моря, ката на пляжі, спринти, командний дух і загартування характеру.',
        },

        en: {
            title: 'Training Camp in Yuzhne',
            description:
                'Misak Dojo students attended a training camp in Yuzhne featuring seaside workouts, kata on the beach, sprint training, teamwork, and Kyokushin Karate spirit.',
        },

        ru: {
            title: 'Учебно-тренировочные сборы в Южном',
            description:
                'Ученики Misak Dojo приняли участие в учебно-тренировочных сборах в городе Южное: тренировки у моря, ката на пляже, спринты и настоящий дух Киокушинкай карате.',
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
    return <KarateSea />;
};

export default Page;