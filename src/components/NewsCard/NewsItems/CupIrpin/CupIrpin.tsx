'use client';

import {useTranslation} from "react-i18next";
import Image from 'next/image'
import {newsData} from "@/utils/news";
import FollowLinks from "@/components/FollowLinks";
import ShareLinks from "@/components/ShareLinks";
import arrow from "@/assets/images/news/arrow-back.svg";
import {usePathname, useRouter} from "next/navigation";
import s from "./CupIrpin.module.scss";
import cn from "classnames";
import {gagalinFont} from "@/fonts";

const CupIrpin = () => {
    const {i18n,t} = useTranslation();
    const currentLanguage = i18n.language;
    const {cupIrpin: newsItem} = newsData;
    const currentPathname = usePathname();

    const fullUrl = `https://misakdojo.com$currentPathname}`

    const router = useRouter();


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
                <div>
                    <div className={s.textItem}>
                        <p className={s.textItem}>
                            {t(`newsItem.text2.${currentLanguage}`, (newsItem.text2 as any)[currentLanguage] as string)}
                        </p>
                        {((newsItem.wins1 as any)[currentLanguage] as string[]).map((item: string) => (
                            <p key={item} className={s.textItem}>{item}</p>))}
                    </div>
                </div>
                <img src={newsItem.images[2]} className={s.img} alt="photo"/>
                <p className={s.textItem}>
                    {t(`newsItem.text3.${currentLanguage}`, (newsItem.text3 as any)[currentLanguage] as string)}
                </p>
                <p className={s.textItem}>
                    {t(`newsItem.osu.${currentLanguage}`, (newsItem.osu as any)[currentLanguage] as string)}
                </p>
            </div>
            <div className={s.socialContent}>
                <ShareLinks url={fullUrl} quote={t(`newsItem.title.${currentLanguage}`, (newsItem.title as any)[currentLanguage] as string)}/>
                <FollowLinks/>
            </div>
        </div>
    );
};

export default CupIrpin;
