'use client';

import {useTranslation} from "react-i18next";
import Image from 'next/image'
import {newsData} from "@/utils/news";
import FollowLinks from "@/components/FollowLinks";
import ShareLinks from "@/components/ShareLinks";
import arrow from "@/assets/images/news/arrow-back.svg";
import {usePathname, useRouter} from "next/navigation";
import s from "./SummerSchool31.module.scss";
import cn from "classnames";
import {gagalinFont} from "@/fonts";

const SummerSchool31 = () => {
    const {i18n,t} = useTranslation();
    const currentLanguage = i18n.language;
    const {summerSchool31: newsItem} = newsData;
    const currentPathname = usePathname();

    const fullUrl = `https://misakdojo.com$currentPathname}`

    const router = useRouter();

    const paragraphs1 = (newsItem.list as any)[currentLanguage] as string
        ? ((newsItem.list as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => (
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
                <p className={s.textItem}>
                    {t(`newsItem.text1.${currentLanguage}`, (newsItem.text1 as any)[currentLanguage] as string)}
                </p>
                <img src={newsItem.images[1]} className={s.img} alt="photo"/>
                <p className={s.textItem}>
                    {t(`newsItem.text2.${currentLanguage}`, (newsItem.text2 as any)[currentLanguage] as string)}
                </p>
                <p className={s.textItem}>
                    {paragraphs1}
                </p>
                <p className={s.textItem}>
                    {t(`newsItem.text3.${currentLanguage}`, (newsItem.text3 as any)[currentLanguage] as string)}
                </p>
                <img src={newsItem.images[2]} className={s.img} alt="photo"/>
                <img src={newsItem.images[3]} className={s.img} alt="photo"/>
                <img src={newsItem.images[4]} className={s.img} alt="photo"/>
                <img src={newsItem.images[5]} className={s.img} alt="photo"/>
                <img src={newsItem.images[6]} className={s.img} alt="photo"/>
                <img src={newsItem.images[7]} className={s.img} alt="photo"/>
                <img src={newsItem.images[8]} className={s.img} alt="photo"/>
                <p className={s.textItem}>
                    {t(`newsItem.text4.${currentLanguage}`, (newsItem.text4 as any)[currentLanguage] as string)}
                </p>
            </div>
            <div className={s.socialContent}>
                <ShareLinks url={fullUrl}
                            quote={t(`newsItem.title.${currentLanguage}`, (newsItem.title as any)[currentLanguage] as string)}/>
                <FollowLinks/>
            </div>
        </div>
    );
};

export default SummerSchool31;
