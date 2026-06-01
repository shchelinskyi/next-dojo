import type { Metadata } from "next";

import PrivacyPolicyPageUA from "@/components/PrivacyPolicyPage/PrivacyPolicyPageUA";
import PrivacyPolicyPageRU from "@/components/PrivacyPolicyPage/PrivacyPolicyPageRU";
import PrivacyPolicyPageEN from "@/components/PrivacyPolicyPage/PrivacyPolicyPageEN";

type Locale = "uk" | "en" | "ru";

type PageProps = {
    params: {
        locale: Locale;
    };
};

export async function generateMetadata(
    { params }: PageProps
): Promise<Metadata> {

    const locale = params.locale;

    const slug = "privacy-policy";

    const seo = {
        uk: {
            title: "Політика конфіденційності",
            description:
                "Політика конфіденційності сайту Misak Dojo. Правила збору та обробки персональних даних.",
        },

        en: {
            title: "Privacy Policy",
            description:
                "Privacy Policy of the Misak Dojo website. Rules for collecting and processing personal data.",
        },

        ru: {
            title: "Политика конфиденциальности",
            description:
                "Политика конфиденциальности сайта Misak Dojo. Правила сбора и обработки персональных данных.",
        },
    };

    const ogLocales = {
        uk: "uk_UA",
        en: "en_US",
        ru: "ru_RU",
    };

    const localizedUrls = {
        uk: `/${slug}`,
        en: `/en/${slug}`,
        ru: `/ru/${slug}`,
    };

    const currentSeo = seo[locale] || seo.uk;

    const canonical = localizedUrls[locale] || localizedUrls.uk;

    return {
        title: currentSeo.title,

        description: currentSeo.description,

        alternates: {
            canonical,

            languages: {
                "uk-UA": localizedUrls.uk,
                "en-US": localizedUrls.en,
                "ru-RU": localizedUrls.ru,
                "x-default": localizedUrls.uk,
            },
        },

        openGraph: {
            title: currentSeo.title,

            description: currentSeo.description,

            url: `https://misakdojo.com${canonical}`,

            siteName: "Misak Dojo",

            locale: ogLocales[locale],

            type: "website",

            images: [
                {
                    url: "https://misakdojo.com/og-image.webp",
                    width: 1680,
                    height: 882,
                    alt: currentSeo.title,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",

            title: currentSeo.title,

            description: currentSeo.description,

            images: ["https://misakdojo.com/og-image.webp"],
        },
    };
}

const Page = ({ params: { locale } }: PageProps) => {

    return (
        <>
            {locale === "uk" && <PrivacyPolicyPageUA />}
            {locale === "ru" && <PrivacyPolicyPageRU />}
            {locale === "en" && <PrivacyPolicyPageEN />}
        </>
    );
};

export default Page;