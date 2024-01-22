'use client';
import React from "react"

import {useTranslation} from "react-i18next";
import Image from 'next/image'
import {newsData} from "@/utils/news";
import FollowLinks from "@/components/FollowLinks";
import ShareLinks from "@/components/ShareLinks";
import arrow from "@/assets/images/news/arrow-back.svg";
import {usePathname, useRouter} from "next/navigation";
import s from "./DojoSempai.module.scss";
import cn from "classnames";
import {gagalinFont} from "@/fonts";

const DojoSempai = () => {
    const {i18n,t} = useTranslation();
    const currentLanguage = i18n.language;
    const {dojoSempai: newsItem} = newsData;

    const currentPathname = usePathname();

    const fullUrl = `https://misakdojo.com$currentPathname}`

    const router = useRouter();

    const paragraphs1 = (newsItem.text1 as any)[currentLanguage] as string
        ? ((newsItem.text1 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => {
            const match = paragraph.match(/<strong>(.*?)<\/strong>/);

            const formattedParagraph = match
                ? (
                    <div key={index} className={s.textItem}>
                        {paragraph.split(match[0]).map((text, i) => (
                            <React.Fragment key={i}>
                                {i > 0 && <strong>{match[1]}</strong>}
                                {text}
                            </React.Fragment>
                        ))}
                    </div>
                )
                : (
                    <div key={index} className={s.textItem}>
                        {paragraph}
                    </div>
                );

            return formattedParagraph;
        })
        : null;
    const paragraphs2 = (newsItem.text2 as any)[currentLanguage] as string
        ? ((newsItem.text2 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => {
            const match = paragraph.match(/<strong>(.*?)<\/strong>/);

            const formattedParagraph = match
                ? (
                    <div key={index} className={s.textItem}>
                        {paragraph.split(match[0]).map((text, i) => (
                            <React.Fragment key={i}>
                                {i > 0 && <strong>{match[1]}</strong>}
                                {text}
                            </React.Fragment>
                        ))}
                    </div>
                )
                : (
                    <div key={index} className={s.textItem}>
                        {paragraph}
                    </div>
                );

            return formattedParagraph;
        })
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
                <div className={s.block}>
                    {paragraphs1}
                </div>
                <div className={s.block}>
                    {paragraphs2}
                </div>
                <div className={s.videoWrapper}>
                    <iframe width="760" height="427" src="https://www.youtube.com/embed/j5sruidhvYs"
                            title={t(`newsItem.title.${currentLanguage}`, (newsItem.title as any)[currentLanguage] as string)}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
                <p className={s.textItem}>
                    {t(`newsItem.text3.${currentLanguage}`, (newsItem.text3 as any)[currentLanguage] as string)}
                </p>
                <p className={s.textItem}>
                    {t(`newsItem.text4.${currentLanguage}`, (newsItem.text4 as any)[currentLanguage] as string)}
                </p>
                <p className={s.textItem}>
                    {t(`newsItem.osu.${currentLanguage}`, (newsItem.osu as any)[currentLanguage] as string)}
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

export default DojoSempai;
