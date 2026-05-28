import ContractOfferUA from "@/components/ContractOffer/ContractOfferUA";
import ContractOfferRU from "@/components/ContractOffer/ContractOfferRU";
import ContractOfferEN from "@/components/ContractOffer/ContractOfferEN";

import type { Metadata } from "next";

type PageProps = {
    params: {
        locale: string;
    };
};

export async function generateMetadata(
    { params: { locale } }: PageProps
): Promise<Metadata> {

    const titles: Record<string, string> = {
        uk: "Публічна оферта",
        ru: "Публичная оферта",
        en: "Public Offer",
    };

    const descriptions: Record<string, string> = {
        uk: "Публічна оферта Misak Dojo. Умови надання послуг та правила користування сайтом.",
        ru: "Публичная оферта Misak Dojo. Условия предоставления услуг и правила пользования сайтом.",
        en: "Public Offer of Misak Dojo. Terms of service and website usage rules.",
    };

    return {
        title: titles[locale] || "Public Offer",

        description:
            descriptions[locale] ||
            "Public Offer of Misak Dojo.",

        alternates: {
            canonical: `/${locale}/contract-offer`,
            languages: {
                uk: "/uk/contract-offer",
                ru: "/ru/contract-offer",
                en: "/en/contract-offer",
            },
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
