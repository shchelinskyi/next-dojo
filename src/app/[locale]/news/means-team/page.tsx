import type { Metadata } from 'next';
import MeansTeam from "@/components/NewsCard/NewsItems/MeansTeam";

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

    const slug = 'means-team';

    const seo = {
        uk: {
            title: 'Що означає команда у «Місак Доджо»',
            description:
                'Команда Misak Dojo — це підтримка, розвиток, спільні тренування та справжній дух Кіокушинкай карате, який об’єднує учнів у велику сім’ю.',
        },

        en: {
            title: 'What Team Means at Misak Dojo',
            description:
                'The Misak Dojo team is about support, growth, shared training, and the true spirit of Kyokushin Karate that unites students into one family.',
        },

        ru: {
            title: 'Что означает команда в «Мисак Доджо»',
            description:
                'Команда Misak Dojo — это поддержка, развитие, совместные тренировки и настоящий дух Киокушинкай карате, который объединяет учеников в одну семью.',
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
    return <MeansTeam />;
};

export default Page;