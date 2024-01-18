import {FC} from 'react';
import {useTranslation} from "react-i18next";
import s from "./NewsCard.module.scss";
import Link from 'next/link';

type NewsItem = {
    type: string;
    title: {
        en: string;
        ru: string;
        ua: string;
    };
    date: string;
    category: {
        en: string;
        ru: string;
        ua: string;
    };
    images: string[];
}

type NewsCardTypes = {
    newsItem: NewsItem;
}

const NewsCard: FC<NewsCardTypes> = ({ newsItem}) => {
    const {i18n, t} = useTranslation();
    const currentLanguage = i18n.language;

    const {type} = newsItem;

    return (
        <Link className={s.link} href={`news/${type}`}>
            <div className={s.card}>
                <div className={s.imgWrapper}>
                     <img className={s.newsImg} src={newsItem.images[0]} loading="lazy" alt="news"/>
                </div>
                <p className={s.newsDate}>{newsItem.date}</p>
                <h6 className={s.newsTitle}>{t(`title.${currentLanguage}`, (newsItem.title as any)[currentLanguage] as string)}</h6>
            </div>
        </Link>
    );
};

export default NewsCard;
