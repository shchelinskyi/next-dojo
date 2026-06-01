import type { Metadata } from 'next';
import CandyOrLife from "@/components/NewsCard/NewsItems/CandyOrLife";

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

    const slug = 'candy-or-life';

    const seo = {
        uk: {
            title: 'Свято Хелловіну в Misak Dojo — Цукерки або життя',
            description:
                'У спортивному клубі Misak Dojo відбулося святкування Хелловіну з веселими конкурсами, повітряними кулями, солодощами та дружньою атмосферою.',
        },

        en: {
            title: 'Halloween Celebration at Misak Dojo — Trick or Treat',
            description:
                'The Misak Dojo sports club celebrated Halloween with fun contests, balloons, sweets, and a great team atmosphere.',
        },

        ru: {
            title: 'Праздник Хэллоуина в Misak Dojo — Сладость или жизнь',
            description:
                'В спортивном клубе Misak Dojo состоялось празднование Хэллоуина с веселыми конкурсами, воздушными шарами, сладостями и дружеской атмосферой.',
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
    return <CandyOrLife />;
};

export default Page;