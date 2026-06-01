import type { Metadata } from 'next';
import Vygnanecz from "@/components/NewsCard/NewsItems/Vygnanecz";

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

    const slug = 'vygnanecz';

    const seo = {
        uk: {
            title: 'Вигнанець — короткометражний фільм',
            description:
                'Рекомендуємо до перегляду короткометражний фільм «Вигнанець» — історію про силу духу, випробування та внутрішню боротьбу.',
        },

        en: {
            title: 'The Outcast — Short Film',
            description:
                'We recommend watching the short film “The Outcast” — a story about strength of spirit, challenges, and inner struggle.',
        },

        ru: {
            title: 'Изгнанник — короткометражный фильм',
            description:
                'Рекомендуем посмотреть короткометражный фильм «Изгнанник» — историю о силе духа, испытаниях и внутренней борьбе.',
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
    return <Vygnanecz />;
};

export default Page;