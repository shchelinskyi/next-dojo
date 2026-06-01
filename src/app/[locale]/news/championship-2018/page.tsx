import type { Metadata } from 'next';
import Championship2018 from "@/components/NewsCard/NewsItems/Championship2018";

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

    const slug = 'championship-2018';

    const seo = {
        uk: {
            title: 'Чемпіонат України з кіокушинкай карате 2018',
            description:
                '4 березня 2018 року в Чорноморському пройшов чемпіонат України з кіокушинкай карате WKO ShinKyokushinkai серед чоловіків та жінок у розділах куміте та ката.',
        },

        en: {
            title: 'Ukrainian Kyokushin Karate Championship 2018',
            description:
                'On March 4, 2018, the Ukrainian WKO ShinKyokushinkai Karate Championship for men and women in kumite and kata divisions took place in Chornomorske.',
        },

        ru: {
            title: 'Чемпионат Украины по киокушинкай карате 2018',
            description:
                '4 марта 2018 года в Черноморском прошёл чемпионат Украины по киокушинкай карате WKO ShinKyokushinkai среди мужчин и женщин в разделах кумите и ката.',
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
    return <Championship2018 />;
};

export default Page;