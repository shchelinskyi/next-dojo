import type { Metadata } from 'next';
import KumiteMarathon from "@/components/NewsCard/NewsItems/KumiteMarathon";

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

    const slug = 'kumite-marathon';

    const seo = {
        uk: {
            title: 'Куміте марафон 2025',
            description:
                'Бійці Misak Dojo взяли участь у Куміте марафоні разом із найсильнішими спортсменами Національної федерації Кіокушинкай України, продемонструвавши витривалість і бойовий дух.',
        },

        en: {
            title: 'Kumite Marathon 2025',
            description:
                'Misak Dojo fighters participated in the Kumite Marathon alongside top athletes of the National Kyokushin Federation of Ukraine, showing endurance and fighting spirit.',
        },

        ru: {
            title: 'Кумите марафон 2025',
            description:
                'Бойцы Misak Dojo приняли участие в Кумите марафоне вместе с сильнейшими спортсменами Национальной федерации Киокушинкай Украины, продемонстрировав выносливость и боевой дух.',
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
    return <KumiteMarathon />;
};

export default Page;