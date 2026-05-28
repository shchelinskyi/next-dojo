import KozakCup2026 from "@/components/NewsCard/NewsItems/KozakCup2026";

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
        uk: "4-й кубок КДЮСШ «КОЗАК» 2026 — турнір з карате",
        ru: "4-й кубок КДЮСШ «КОЗАК» 2026 — турнир по карате",
        en: "The 4th Cup of sports school \"KOZAK\" — Karate Tournament",
    };

    const descriptions: Record<string, string> = {
        uk: "Новини та результати турніру 4-й кубок КДЮСШ «КОЗАК»  з кіокушинкай карате від Misak Dojo.",
        ru: "Новости и результаты турнира 4-й кубок КДЮСШ «КОЗАК» по киокушинкай карате от Misak Dojo.",
        en: "News and results of the 4th Cup of sports school \"KOZAK\" tournament by Misak Dojo.",
    };

    return {
        title: titles[locale],

        description:
            descriptions[locale] ||
            "Kozak Cup 2026 karate tournament news.",

        alternates: {
            canonical: `/${locale}/news/kozak-cup-2026`,
            languages: {
                uk: "/uk/news/kozak-cup-2026",
                ru: "/ru/news/kozak-cup-2026",
                en: "/en/news/kozak-cup-2026",
            },
        },
    };
}

const Page = () => {
    return <KozakCup2026 />;
};

export default Page;