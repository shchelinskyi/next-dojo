'use client';
import React from "react"

import {useTranslation} from "react-i18next";
import Image from 'next/image'
import {newsData} from "@/utils/news";
import FollowLinks from "@/components/FollowLinks";
import ShareLinks from "@/components/ShareLinks";
import arrow from "@/assets/images/news/arrow-back.svg";
import {usePathname, useRouter} from "next/navigation";
import cn from "classnames";
import {gagalinFont} from "@/fonts";
import s from "./Vygnanecz.module.scss";

const Vygnanecz = () => {
    const {i18n,t} = useTranslation();
    const currentLanguage = i18n.language;
    const {vygnanecz: newsItem} = newsData;

    const currentPathname = usePathname();

    const fullUrl = `https://misakdojo.com${currentPathname}`;

    const router = useRouter();


    return (
        <div>
            <div className={s.content}>
                <div className={s.head} onClick={() => router.push('/' + currentLanguage)}>
                    <Image src={arrow} className={s.icon} width={32} height={32} alt="arrow"/>
                    <div className={s.publishedItem}>{t("published")}: <span>{newsItem.date}</span></div>
                </div>
                <h4 className={cn(s.title, gagalinFont.className)}>{t(`newsItem.title.${currentLanguage}`, (newsItem.title as any)[currentLanguage] as string)}</h4>
                <p className={s.textItem}>
                    {t(`newsItem.text1.${currentLanguage}`, (newsItem.text1 as any)[currentLanguage] as string)}
                </p>
                <div className={s.videoWrapper}>
                    <iframe width="760" height="427" src="https://www.youtube.com/embed/UyKTVUCQazg"
                            title={t(`newsItem.title.${currentLanguage}`, (newsItem.title as any)[currentLanguage] as string)}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
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

export default Vygnanecz;
