'use client';

import {useTranslation} from "react-i18next";
import Image from 'next/image'
import {newsData} from "@/utils/news";
import FollowLinks from "@/components/FollowLinks";
import ShareLinks from "@/components/ShareLinks";
import arrow from "@/assets/images/news/arrow-back.svg";
import {usePathname, useRouter} from "next/navigation";
import cn from "classnames";
import {gagalinFont} from "@/fonts";
import s from "./KarateDay.module.scss";

const KarateDay = () => {
    const {i18n, t} = useTranslation();
    const currentLanguage = i18n.language;
    const {karateDay: newsItem} = newsData;
    const currentPathname = usePathname();

    const fullUrl = `https://misakdojo.com${currentPathname}`;

    const router = useRouter();

    const paragraphs1 = (newsItem.text as any)[currentLanguage] as string
        ? ((newsItem.text as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => (
            <div key={index} className={s.textItem}>
                {paragraph}
            </div>
        ))
        : null;

    return (
        <div>
            <div className={s.content}>
                <div className={s.head} onClick={() => router.push('/' + currentLanguage)}>
                    <Image src={arrow} className={s.icon} width={32} height={32} alt="arrow"/>
                    <div className={s.publishedItem}>{t("published")}: <span>{newsItem.date}</span></div>
                </div>
                <h4 className={cn(s.title, gagalinFont.className)}>{t(`newsItem.title.${currentLanguage}`, (newsItem.title as any)[currentLanguage] as string)}</h4>
                <img src={newsItem.images[0]} className={s.img} alt="photo"/>
                <div>
                    {paragraphs1}
                </div>
            </div>
            <div className={s.socialContent}>
                <ShareLinks url={fullUrl}
                            quote={t(`newsItem.title.${currentLanguage}`, (newsItem.title as any)[currentLanguage] as string)}/>
                <FollowLinks/>
            </div>
        </div>
    );
};

export default KarateDay;

