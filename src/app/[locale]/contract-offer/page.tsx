import type { Metadata } from "next";

import ContractOfferUA from "@/components/ContractOffer/ContractOfferUA";
import ContractOfferRU from "@/components/ContractOffer/ContractOfferRU";
import ContractOfferEN from "@/components/ContractOffer/ContractOfferEN";

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

    const slug = "contract-offer";

    const seo = {
        uk: {
            title: "Публічна оферта",
            description:
                "Публічна оферта Misak Dojo. Умови надання послуг та правила користування сайтом.",
        },

        en: {
            title: "Public Offer",
            description:
                "Public Offer of the Misak Dojo website. Terms of service and website usage rules.",
        },

        ru: {
            title: "Публичная оферта",
            description:
                "Публичная оферта сайта Misak Dojo. Условия предоставления услуг и правила пользования сайтом.",
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
            {locale === "uk" && <ContractOfferUA />}
            {locale === "ru" && <ContractOfferRU />}
            {locale === "en" && <ContractOfferEN />}
        </>
    );
};

export default Page;
