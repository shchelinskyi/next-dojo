import type { Metadata } from 'next';
import KozakCup2025 from "@/components/NewsCard/NewsItems/KozakCup2025";

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

    const slug = 'kozak-cup-2025';

    const seo = {
        uk: {
            title: '3-й Кубок КДЮСШ «Козак» з Кіокушинкай карате',
            description:
                'Команда Misak Dojo успішно виступила на III Кубку КДЮСШ «Козак» з Кіокушинкай карате, здобувши численні перемоги та продемонструвавши справжній командний дух.',
        },

        en: {
            title: '3rd CYSS “Kozak” Kyokushin Karate Cup',
            description:
                'The Misak Dojo team successfully competed at the 3rd CYSS “Kozak” Kyokushin Karate Cup, winning multiple awards and demonstrating true team spirit.',
        },

        ru: {
            title: '3-й Кубок КДЮСШ «Козак» по Киокушинкай карате',
            description:
                'Команда Misak Dojo успешно выступила на III Кубке КДЮСШ «Козак» по Киокушинкай карате, завоевав множество наград и продемонстрировав настоящий командный дух.',
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
    return <KozakCup2025 />;
};

export default Page;