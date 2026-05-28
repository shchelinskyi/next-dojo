import PrivacyPolicyPageUA from "@/components/PrivacyPolicyPage/PrivacyPolicyPageUA";
import PrivacyPolicyPageRU from "@/components/PrivacyPolicyPage/PrivacyPolicyPageRU";
import PrivacyPolicyPageEN from "@/components/PrivacyPolicyPage/PrivacyPolicyPageEN";

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
        uk: "Політика конфіденційності",
        ru: "Политика конфиденциальности",
        en: "Privacy Policy",
    };

    const descriptions: Record<string, string> = {
        uk: "Політика конфіденційності сайту Misak Dojo. Правила збору та обробки персональних даних.",
        ru: "Политика конфиденциальности сайта Misak Dojo. Правила сбора и обработки персональных данных.",
        en: "Privacy Policy of Misak Dojo website. Rules for collecting and processing personal data.",
    };

    return {
        title: titles[locale] || "Privacy Policy",

        description:
            descriptions[locale] ||
            "Privacy Policy of Misak Dojo website.",

        alternates: {
            canonical: `/${locale}/privacy-policy`,
            languages: {
                uk: "/uk/privacy-policy",
                ru: "/ru/privacy-policy",
                en: "/en/privacy-policy",
            },
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