import type { Metadata } from 'next';
import MeaningTerm from "@/components/NewsCard/NewsItems/MeaningTerm";

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

    const slug = 'meaning-term';

    const seo = {
        uk: {
            title: 'Що означає «Осу» у Кіокушинкай карате',
            description:
                'Значення слова «Осу» у Кіокушинкай карате: терпіння, повага, вдячність, наполегливість і дух справжнього каратиста на шляху самовдосконалення.',
        },

        en: {
            title: 'What “Osu” Means in Kyokushin Karate',
            description:
                'The meaning of “Osu” in Kyokushin Karate: patience, respect, gratitude, perseverance, and the spirit of a true karate practitioner.',
        },

        ru: {
            title: 'Что означает «Осу» в Киокушинкай карате',
            description:
                'Значение слова «Осу» в Киокушинкай карате: терпение, уважение, благодарность, настойчивость и дух настоящего каратиста.',
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
    return <MeaningTerm />;
};

export default Page;