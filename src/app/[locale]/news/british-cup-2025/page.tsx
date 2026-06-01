import type { Metadata } from 'next';
import BritishCup2025 from "@/components/NewsCard/NewsItems/BritishCup2025";

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

    const slug = 'british-cup-2025';

    const seo = {
        uk: {
            title: 'Змагання British Open 2025',
            description:
                'Вихованець Misak Dojo Іван здобув перемогу на змаганнях British Open 2025 після багатьох років тренувань, дисципліни та наполегливої праці.',
        },

        en: {
            title: 'British Open 2025 Tournament',
            description:
                'Misak Dojo student Ivan achieved victory at the British Open 2025 tournament after years of discipline, hard work, and Kyokushin Karate training.',
        },

        ru: {
            title: 'Соревнования British Open 2025',
            description:
                'Воспитанник Misak Dojo Иван одержал победу на соревнованиях British Open 2025 благодаря многолетним тренировкам, дисциплине и духу Киокушинкай карате.',
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
    return <BritishCup2025 />;
};

export default Page;