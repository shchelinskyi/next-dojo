import type { Metadata } from 'next';
import DojoSempai from "@/components/NewsCard/NewsItems/DojoSempai";

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

    const slug = 'dojo-sempai';

    const seo = {
        uk: {
            title: 'Тренування у доджо семпая Олександра Корольова',
            description:
                'Каратисти клубу «Місак Доджо» відвідали доджо семпая Олександра Корольова, провели спільне тренування, куміте та дружнє спілкування після занять.',
        },

        en: {
            title: 'Training at Sempai Oleksandr Korolyov’s Dojo',
            description:
                'Misak Dojo karate students visited Sempai Oleksandr Korolyov’s dojo for joint training, kumite practice, and friendly communication after the session.',
        },

        ru: {
            title: 'Тренировка в доджо семпая Александра Королёва',
            description:
                'Каратисты клуба «Мисак Доджо» посетили доджо семпая Александра Королёва, провели совместную тренировку, кумите и дружеское общение после занятий.',
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
    return <DojoSempai />;
};

export default Page;