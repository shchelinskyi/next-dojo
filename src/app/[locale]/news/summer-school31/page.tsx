import type { Metadata } from 'next';
import SummerSchool31 from "@/components/NewsCard/NewsItems/SummerSchool31";

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

    const slug = 'summer-school31';

    const seo = {
        uk: {
            title: '31-ша Школа «Вінниця-2021»',
            description:
                'Команда Misak Dojo взяла участь у 31-й Літній школі «Вінниця-2021» під керівництвом шихана Олександра Гончаренка. Учні успішно склали іспити на дан і кю ступені.',
        },

        en: {
            title: '31st “Vinnytsia-2021” Kyokushin Karate School',
            description:
                'The Misak Dojo team attended the 31st annual “Vinnytsia-2021” Kyokushin Karate School led by Shihan Oleksandr Honcharenko and successfully passed dan and kyu examinations.',
        },

        ru: {
            title: '31-я Школа «Винница-2021»',
            description:
                'Команда Misak Dojo приняла участие в 31-й ежегодной Школе «Винница-2021» под руководством шихана Александра Гончаренко и успешно сдала экзамены на дан и кю степени.',
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
    return <SummerSchool31 />;
};

export default Page;