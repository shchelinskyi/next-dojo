import type { Metadata } from 'next';
import CoachDay from "@/components/NewsCard/NewsItems/CoachDay";

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

    const slug = 'coach-day';

    const seo = {
        uk: {
            title: 'День тренера України — привітання від MISAKDOJO',
            description:
                '19 липня в Україні відзначають День тренера. Команда MISAKDOJO вітає сенсеїв та наставників Кіокушинкай Карате зі святом.',
        },

        en: {
            title: "Ukraine's Coach Day — Greetings from MISAKDOJO",
            description:
                'On July 19, Ukraine celebrates Coach Day. The MISAKDOJO team congratulates all Kyokushin Karate senseis and mentors on their professional holiday.',
        },

        ru: {
            title: 'День тренера Украины — поздравление от MISAKDOJO',
            description:
                '19 июля в Украине отмечают День тренера. Команда MISAKDOJO поздравляет всех сенсеев и наставников Киокушинкай Карате с профессиональным праздником.',
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
    return <CoachDay />;
};

export default Page;