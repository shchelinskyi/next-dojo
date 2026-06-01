import type { Metadata } from 'next';
import ShchoTakeZbory from "@/components/NewsCard/NewsItems/ShchoTakeZbory";

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

    const slug = 'shcho-take-zbory';

    const seo = {
        uk: {
            title: 'Зимова школа «Вінниця 2019»',
            description:
                'Учні Misak Dojo взяли участь у Зимовій школі «Вінниця 2019» під керівництвом шихана Олександра Гончаренка та успішно склали іспити на нові кю.',
        },

        en: {
            title: 'Winter School “Vinnytsia 2019”',
            description:
                'Misak Dojo students attended the Winter School “Vinnytsia 2019” led by Shihan Oleksandr Honcharenko and successfully passed examinations for new kyu ranks.',
        },

        ru: {
            title: 'Зимняя школа «Винница 2019»',
            description:
                'Ученики Misak Dojo приняли участие в Зимней школе «Винница 2019» под руководством шихана Александра Гончаренко и успешно сдали экзамены на новые кю.',
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
    return <ShchoTakeZbory />;
};

export default Page;