import type { Metadata } from 'next';
import SummerSchool32 from "@/components/NewsCard/NewsItems/SummerSchool32";

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

    const slug = 'summer-school32';

    const seo = {
        uk: {
            title: '32-га Літня школа Кіокушинкай карате',
            description:
                'Учні Misak Dojo взяли участь у 32-й Літній школі Кіокушинкай карате під керівництвом шихана Олександра Гончаренка та успішно склали екзамени на нові кю.',
        },

        en: {
            title: '32nd Summer Kyokushin Karate School',
            description:
                'Misak Dojo students attended the 32nd Summer Kyokushin Karate School led by Shihan Oleksandr Honcharenko and successfully passed exams for new kyu levels.',
        },

        ru: {
            title: '32-я Летняя школа Киокушинкай карате',
            description:
                'Ученики Misak Dojo приняли участие в 32-й Летней школе Киокушинкай карате под руководством шихана Александра Гончаренко и успешно сдали экзамены на новые кю.',
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
    return <SummerSchool32 />;
};

export default Page;