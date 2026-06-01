import type { Metadata } from 'next';
import KyivCupJan from "@/components/NewsCard/NewsItems/KyivCupJan";

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

    const slug = 'kyiv-cup-jan';

    const seo = {
        uk: {
            title: 'Кубок Києва — Січень 2025',
            description:
                'Спортсмени Misak Dojo взяли участь у Кубку Києва 2025, продемонструвавши силу духу, дисципліну та наполегливу працю на шляху Кіокушинкай карате.',
        },

        en: {
            title: 'Kyiv Cup — January 2025',
            description:
                'Misak Dojo athletes competed in the Kyiv Cup 2025, demonstrating discipline, determination, and the true spirit of Kyokushin Karate.',
        },

        ru: {
            title: 'Кубок Киева — Январь 2025',
            description:
                'Спортсмены Misak Dojo приняли участие в Кубке Киева 2025, продемонстрировав силу духа, дисциплину и упорный труд на пути Киокушинкай карате.',
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
    return <KyivCupJan />;
};

export default Page;