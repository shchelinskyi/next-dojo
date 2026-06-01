import type { Metadata } from 'next';
import KarateBegins from "@/components/NewsCard/NewsItems/KarateBegins";

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

    const slug = 'karate-begins';

    const seo = {
        uk: {
            title: 'З чого починається карате',
            description:
                'Кіокушинкай карате — це не лише фізична підготовка, а й тренування розуму. Основні команди, правила та терміни для учнів Misak Dojo.',
        },

        en: {
            title: 'Where Karate Begins',
            description:
                'Kyokushin Karate is not only about physical training but also about developing the mind. Essential commands, rules, and terms for Misak Dojo students.',
        },

        ru: {
            title: 'С чего начинается карате',
            description:
                'Киокушинкай карате — это не только физическая подготовка, но и тренировка разума. Основные команды, правила и термины для учеников Misak Dojo.',
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
    return <KarateBegins />;
};

export default Page;