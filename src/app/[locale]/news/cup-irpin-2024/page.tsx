import type { Metadata } from 'next';
import CupIrpin2024 from "@/components/NewsCard/NewsItems/CupIrpin2024";

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

    const slug = 'cup-irpin-2024';

    const seo = {
        uk: {
            title: 'Кубок Княгині Ольги, Ірпінь 2024',
            description:
                'Спортсмени клубу «Місак Доджо» успішно виступили на турнірі Кубок Княгині Ольги 2024 в Ірпені, здобувши призові місця у змаганнях з куміте.',
        },

        en: {
            title: 'Princess Olga Cup, Irpin 2024',
            description:
                'Misak Dojo athletes achieved strong results at the Princess Olga Cup 2024 kumite tournament in Irpin, winning several prize places.',
        },

        ru: {
            title: 'Кубок Княгини Ольги, Ирпень 2024',
            description:
                'Спортсмены клуба «Мисак Доджо» успешно выступили на турнире Кубок Княгини Ольги 2024 в Ирпене, завоевав призовые места в соревнованиях по кумите.',
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
    return <CupIrpin2024 />;
};

export default Page;