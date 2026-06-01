import type { Metadata } from 'next';
import MisakDojoParty from "@/components/NewsCard/NewsItems/MisakDojoParty";

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

    const slug = 'misak-dojo-party';

    const seo = {
        uk: {
            title: 'День народження Сенсея у стилі ніндзя-черепашок',
            description:
                'Святкування дня народження Сенсея у Misak Dojo у стилі ніндзя-черепашок: атмосфера свята, веселі емоції та справжній дух команди каратистів.',
        },

        en: {
            title: 'Sensei’s Birthday in Ninja Turtles Style',
            description:
                'Misak Dojo celebrated Sensei’s birthday in Ninja Turtles style with fun activities, a great atmosphere, and unforgettable moments for young karate students.',
        },

        ru: {
            title: 'День рождения Сенсея в стиле черепашек-ниндзя',
            description:
                'Празднование дня рождения Сенсея в Misak Dojo в стиле черепашек-ниндзя: яркие эмоции, праздничная атмосфера и настоящий командный дух каратистов.',
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
    return <MisakDojoParty />;
};

export default Page;