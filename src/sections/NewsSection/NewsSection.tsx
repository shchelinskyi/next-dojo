"use client"
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {newsData} from "@/utils/news";
import {Card, Container, Placeholder, Stack} from "react-bootstrap";
import NewsCard from "@/components/NewsCard";
import {gagalinFont} from "@/fonts";
import cn from "classnames";
import s from "./NewsSection.module.scss"


const NewsSection = () => {
    const { t } = useTranslation();
    const isClient = typeof window !== 'undefined';
    let itemsPerPage: number = 2;

    if (isClient) {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 992) {
            itemsPerPage = 2;
        } else if (windowWidth <= 1200) {
            itemsPerPage = 3;
        } else {
            itemsPerPage = 6;
        }
    }

    const [visibleItems, setVisibleItems] = useState(itemsPerPage);
    const [showNewsCard, setShowNewsCard] = useState(false);


    useEffect(() => {

        const timer = setTimeout(() => {
            setShowNewsCard(true);
        }, 500);

        return () => {
            clearTimeout(timer)
        };

    }, [visibleItems]);

    const handleShowMore = () => {

        const totalItems = Object.values(newsData).length;
        const newVisibleItems = Math.min(visibleItems + itemsPerPage, totalItems);
        setVisibleItems(newVisibleItems);
        setShowNewsCard(false);
    };

    return (
        <>
            <Container className={s.wrapper}>
                <div className={s.container}>
                    <h3  className={cn(s.title, gagalinFont.className)}>{t("news")}</h3>
                    <div className={s.content}>
                        {Object.values(newsData)
                            .slice(0, visibleItems)
                            .map((newsItem, index) => {
                                if (index < visibleItems-itemsPerPage) {
                                    return  <NewsCard key={newsItem.title.en} newsItem={newsItem}/>
                                } else {
                                    return <div key={newsItem.title.en}>
                                        {!showNewsCard &&
                                            <div className={s.placeholderContainer}>
                                                <Placeholder as={Card.Text} animation="glow">
                                                    <Placeholder className={s.placeholderImg} bg="primary"/>
                                                </Placeholder>
                                                <div>
                                                    <Placeholder as={Card.Text} animation="glow">
                                                        <Placeholder className={s.placeholderDate} bg="primary"/>
                                                        <Placeholder className={s.placeholderTitle} bg="primary"/>
                                                    </Placeholder>
                                                </div>
                                            </div>
                                        }
                                        {showNewsCard &&
                                            <NewsCard key={newsItem.title.en} newsItem={newsItem}/>
                                        }
                                    </div>
                                }
                            })
                        }
                    </div>
                    {visibleItems < Object.values(newsData).length && (
                        <div className={s.btnWrapper}>
                            <button onClick={handleShowMore} className={s.customButton}>{t("showMore")}</button>
                        </div>
                    )}
                </div>
            </Container>
        </>
    );
};

export default NewsSection;
