import CupIrpin2026 from "@/components/NewsCard/NewsItems/CupIrpin2026";

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
        uk: "Кубок Княгині Ольги, м. Ірпінь 2026 — новини турніру",
        ru: "Кубок Княгини Ольги, г. Ирпинь 2026 — новости турнира",
        en: "Princess Olga Cup, Irpin city 2026 — Tournament News",
    };

    const descriptions: Record<string, string> = {
        uk: "Новини та результати турніру Кубок Княгині Ольги 2026 з кіокушинкай карате від Misak Dojo.",
        ru: "Новости и результаты турнира Кубок Княгини Ольги 2026 по киокушинкай карате от Misak Dojo.",
        en: "News and results of the Princess Olga Cup 2026 Kyokushin Karate tournament by Misak Dojo.",
    };

    return {
        title: titles[locale],

        description:
            descriptions[locale] ||
            "Cup Irpin 2026 karate tournament news.",

        alternates: {
            canonical: `/${locale}/news/cup-irpin-2026`,
            languages: {
                uk: "/uk/news/cup-irpin-2026",
                ru: "/ru/news/cup-irpin-2026",
                en: "/en/news/cup-irpin-2026",
            },
        },
    };
}

const Page = () => {

    return (
        <CupIrpin2026 />
    );
};

export default Page;