'use client';

import {useTranslation} from "react-i18next";
import Image from 'next/image'
import {newsData} from "@/utils/news";
import FollowLinks from "@/components/FollowLinks";
import ShareLinks from "@/components/ShareLinks";
import arrow from "@/assets/images/news/arrow-back.svg";
import {usePathname, useRouter} from "next/navigation";
import {gagalinFont} from "@/fonts";
import cn from "classnames";
import s from "./KozakCup2024.module.scss";

const KozakCup2024 = () => {
    const {i18n,t} = useTranslation();
    const currentLanguage = i18n.language;
    const {kozakCup2024: newsItem} = newsData;
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
                <div className={s.videoWrapper}>
                    <iframe width="760" height="427" src="https://www.youtube.com/embed/4pbvJR5Rn6k?si=zZtPDAMF2Q3p7JYZ"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
                <p className={s.textItem}>
                    {t(`newsItem.text1.${currentLanguage}`, (newsItem.text1 as any)[currentLanguage] as string)}
                </p>
                <img src={newsItem.images[0]} className={s.img} alt="photo"/>
                <div>
                    <div className={s.textItem}>
                        <p className={s.textItem}>
                            {t(`newsItem.text2.${currentLanguage}`, (newsItem.text2 as any)[currentLanguage] as string)}
                        </p>
                        <br/>
                        {((newsItem.wins1 as any)[currentLanguage] as string[]).map((item: string) => (
                            <p key={item} className={s.textItem}>{item}</p>))}<br/>
                        {((newsItem.wins2 as any)[currentLanguage] as string[]).map((item: string) => (
                            <p key={item} className={s.textItem}>{item}</p>))}<br/>
                        {((newsItem.wins3 as any)[currentLanguage] as string[]).map((item: string) => (
                            <p key={item} className={s.textItem}>{item}</p>))}<br/>
                        {((newsItem.wins4 as any)[currentLanguage] as string[]).map((item: string) => (
                            <p key={item} className={s.textItem}>{item}</p>))}<br/>
                    </div>
                </div>
                <img src={newsItem.images[1]} className={s.img} alt="photo"/>
                <img src={newsItem.images[2]} className={s.img} alt="photo"/>
                <img src={newsItem.images[3]} className={s.img} alt="photo"/>
                <img src={newsItem.images[4]} className={s.img} alt="photo"/>
                <img src={newsItem.images[5]} className={s.img} alt="photo"/>
                <img src={newsItem.images[6]} className={s.img} alt="photo"/>
                <p className={s.textItem}>
                    {t(`newsItem.text3.${currentLanguage}`, (newsItem.text3 as any)[currentLanguage] as string)}
                </p>
                <img src={newsItem.images[7]} className={s.img} alt="photo"/>
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

export default KozakCup2024;
