import type { Metadata } from 'next';
import KozakCup2026 from "@/components/NewsCard/NewsItems/KozakCup2026";

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

    const slug = 'kozak-cup-2026';

    const seo = {
        uk: {
            title: '4-й Кубок КДЮСШ «Козак» з Кіокушинкай карате',
            description:
                'Спортсмени Misak Dojo успішно виступили на IV Кубку КДЮСШ «Козак» з Кіокушинкай карате, здобувши призові місця серед понад 500 учасників турніру.',
        },

        en: {
            title: '4th CYSS “Kozak” Kyokushin Karate Cup',
            description:
                'Misak Dojo athletes successfully competed at the 4th CYSS “Kozak” Kyokushin Karate Cup, winning top places among more than 500 tournament participants.',
        },

        ru: {
            title: '4-й Кубок КДЮСШ «Козак» по Киокушинкай карате',
            description:
                'Спортсмены Misak Dojo успешно выступили на IV Кубке КДЮСШ «Козак» по Киокушинкай карате, завоевав призовые места среди более чем 500 участников турнира.',
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
    return <KozakCup2026 />;
};

export default Page;