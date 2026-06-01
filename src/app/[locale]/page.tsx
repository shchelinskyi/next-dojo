import type { Metadata } from 'next';
import StoreProvider from "@/providers/StoreProvider";
import Main from "@/components/Main";

type Locale = 'uk' | 'en' | 'ru';

type Props = {
    params: {
        locale: Locale;
    };
};

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {

    const seo = {
        uk: {
            title: 'Школа Кіокушинкай карате Misak Dojo для дітей та дорослих',
            description:
                'Кіокушинкай карате на Мінській, Оболоні та Позняках для дітей та дорослих.',
        },

        en: {
            title: 'Kyokushin Karate School Misak Dojo for Children and Adults',
            description:
                'Kyokushin karate classes for children and adults in Kyiv.',
        },

        ru: {
            title: 'Школа Киокушинкай карате Misak Dojo для детей и взрослых',
            description:
                'Киокушинкай карате для детей и взрослых в Киеве.',
        },
    };

    const urls = {
        uk: '/',
        en: '/en',
        ru: '/ru',
    };

    const currentSeo = seo[params.locale];

    return {
        title: currentSeo.title,
        description: currentSeo.description,

        alternates: {
            canonical: urls[params.locale],
            languages: {
                'uk-UA': '/',
                'en-US': '/en',
                'ru-RU': '/ru',
                'x-default': '/',
            },
        },

        openGraph: {
            title: currentSeo.title,
            description: currentSeo.description,
            url: urls[params.locale],
            type: 'website',
            locale:
                params.locale === 'en'
                    ? 'en_US'
                    : params.locale === 'ru'
                        ? 'ru_RU'
                        : 'uk_UA',
            images: [
                {
                    url: 'https://misakdojo.com/og-image.webp',
                    width: 1680,
                    height: 882,
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

export default function Home() {
    return (
        <StoreProvider>
            <Main />
        </StoreProvider>
    );
}
