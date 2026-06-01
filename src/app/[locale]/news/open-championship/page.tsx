import type { Metadata } from 'next';
import OpenChampionship from "@/components/NewsCard/NewsItems/OpenChampionship";

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

    const slug = 'open-championship';

    const seo = {
        uk: {
            title: 'Змагання СК «Файтер» серед дітей',
            description:
                'Юні спортсмени Misak Dojo успішно виступили на змаганнях СК «Файтер», здобувши призові місця та отримавши цінний досвід у поєдинках з кіокушинкай карате.',
        },

        en: {
            title: 'Fighter Sports Club Children’s Tournament',
            description:
                'Young Misak Dojo athletes successfully competed in the Fighter Sports Club tournament, winning medals and gaining valuable Kyokushin Karate competition experience.',
        },

        ru: {
            title: 'Соревнования СК «Файтер» среди детей',
            description:
                'Юные спортсмены Misak Dojo успешно выступили на соревнованиях СК «Файтер», завоевав призовые места и получив ценный опыт в поединках по киокушинкай карате.',
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
    return <OpenChampionship />;
};

export default Page;