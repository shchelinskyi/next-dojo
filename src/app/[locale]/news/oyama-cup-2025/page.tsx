import type { Metadata } from 'next';
import OyamaCup2025 from "@/components/NewsCard/NewsItems/OyamaCup2025";

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

    const slug = 'oyama-cup-2025';

    const seo = {
        uk: {
            title: 'Кубок Оями 2025 в Ірпені',
            description:
                'Учні Misak Dojo взяли участь у турнірі з куміте «Кубок Оями 2025» в Ірпені та продемонстрували силу духу, характер і справжній дух Кіокушинкай карате.',
        },

        en: {
            title: 'Oyama Cup 2025 in Irpin',
            description:
                'Misak Dojo students participated in the Oyama Cup 2025 kumite tournament in Irpin, showing true Kyokushin spirit, determination, and strong character.',
        },

        ru: {
            title: 'Кубок Оямы 2025 в Ирпене',
            description:
                'Ученики Misak Dojo приняли участие в турнире по кумите «Кубок Оямы 2025» в Ирпене и продемонстрировали настоящий дух Киокушинкай карате, силу характера и стремление к победе.',
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
    return <OyamaCup2025 />;
};

export default Page;