import {FC} from 'react';
import {useTranslation} from "react-i18next";
import s from "./NewsCard.module.scss";
import Link from 'next/link';

type NewsItem = {
    linkName: string;
    title: {
        en: string;
        ru: string;
        uk: string;
    };
    date: string;
    category: {
        en: string;
        ru: string;
        uk: string;
    };
    mainImg: string;
    images: string[];
}

type NewsCardTypes = {
    newsItem: NewsItem;
}

const NewsCard: FC<NewsCardTypes> = ({ newsItem}) => {
    const {i18n, t} = useTranslation();
    const currentLanguage = i18n.language;

    const {linkName} = newsItem;

    return (
        <Link className={s.link} href={`news/${linkName}`} target="_blank">
            <div className={s.card}>
                <div className={s.imgWrapper}>
                     <img className={s.newsImg} src={newsItem.mainImg} alt=".     dojo" width={370} height={330}
                            sizes="(min-width: 1201px) 370px, 330px, (max-width: 1200px) 290px, 260px, (max-width: 992px) 324px, 290px, (max-width: 480px) 310px, 278px "/>
                </div>
                <p className={s.newsDate}>{newsItem.date}</p>
                <h6 className={s.newsTitle}>{t(`title.${currentLanguage}`, (newsItem.title as any)[currentLanguage] as string)}</h6>
            </div>
        </Link>
    );
};

export default NewsCard;
