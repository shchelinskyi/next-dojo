import type { Metadata } from 'next';
import FreedomCup2025 from "@/components/NewsCard/NewsItems/FreedomCup2025";

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

    const slug = 'freedom-cup-2025';

    const seo = {
        uk: {
            title: 'Freedom Cup 2025',
            description:
                'Спортсмени Misak Dojo взяли участь у турнірі Freedom Cup 2025, продемонструвавши характер, наполегливість і бойовий дух на татамі серед понад 300 учасників.',
        },

        en: {
            title: 'Freedom Cup 2025',
            description:
                'Misak Dojo athletes participated in Freedom Cup 2025, demonstrating determination, fighting spirit, and strong performances among more than 300 competitors.',
        },

        ru: {
            title: 'Freedom Cup 2025',
            description:
                'Спортсмены Misak Dojo приняли участие в турнире Freedom Cup 2025, продемонстрировав характер, упорство и боевой дух среди более чем 300 участников.',
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
    return <FreedomCup2025 />;
};

export default Page;