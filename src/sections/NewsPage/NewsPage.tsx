"use client"
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {newsData} from "@/utils/news";
import {Card, Container, Placeholder, Stack} from "react-bootstrap";
import NewsCard from "@/components/NewsCard";
import CustomButton from "@/components/CustomButton";
import s from "./NewsPage.module.scss"
import cn from "classnames";
import {gagalinFont} from "@/fonts/fonts";


const NewsPage = () => {
    const { t } = useTranslation();
    const isClient = typeof window !== 'undefined';
    const itemsPerPage = isClient ? (window.innerWidth > 480 && window.innerWidth <= 992) ? 2 : 3 : 3;
    const [visibleItems, setVisibleItems] = useState(itemsPerPage);
    const [showNewsCard, setShowNewsCard] = useState(false);


    useEffect(() => {

        const timer = setTimeout(() => {
            setShowNewsCard(true);
        }, 1500);

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
                        <Stack direction="horizontal" style={{ justifyContent: "center", marginTop: "70px" }}>
                            <CustomButton onClick={handleShowMore}>{t("showMore")}</CustomButton>
                        </Stack>
                    )}
                </div>
            </Container>
        </>
    );
};

export default NewsPage;
