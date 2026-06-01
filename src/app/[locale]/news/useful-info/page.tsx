import type { Metadata } from 'next';
import UsefulInfo from "@/components/NewsCard/NewsItems/UsefulInfo";

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

    const slug = 'useful-info';

    const seo = {
        uk: {
            title: 'Що повинен знати новачок у карате',
            description:
                'Міні-шпаргалка для нових учнів Misak Dojo: привітання, правила етикету, японський рахунок та основи тренувань у кіокушинкай карате.',
        },

        en: {
            title: 'What a Beginner Should Know in Karate',
            description:
                'A quick guide for new Misak Dojo students: greetings, dojo etiquette, Japanese counting, and the basics of Kyokushin Karate training.',
        },

        ru: {
            title: 'Что должен знать новичок в карате',
            description:
                'Мини-шпаргалка для новых учеников Misak Dojo: приветствия, этикет доджо, японский счет и основы тренировок по киокушинкай карате.',
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
    return <UsefulInfo />;
};

export default Page;