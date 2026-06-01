import type { Metadata } from 'next';
import CupIrpin from "@/components/NewsCard/NewsItems/CupIrpin";

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

    const slug = 'cup-irpin';

    const seo = {
        uk: {
            title: 'Кубок Княгині Ольги, Ірпінь',
            description:
                'Каратисти клубу «Місак Доджо» гідно виступили на Кубку Княгині Ольги в Ірпені, здобувши призові місця та цінний змагальний досвід.',
        },

        en: {
            title: 'Princess Olga Cup, Irpin',
            description:
                'Misak Dojo karate athletes delivered strong performances at the Princess Olga Cup in Irpin, earning prize places and valuable tournament experience.',
        },

        ru: {
            title: 'Кубок Княгини Ольги, Ирпень',
            description:
                'Каратисты клуба «Мисак Доджо» достойно выступили на Кубке Княгини Ольги в Ирпене, завоевав призовые места и ценный соревновательный опыт.',
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
    return <CupIrpin />;
};

export default Page;