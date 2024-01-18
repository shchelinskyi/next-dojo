import React, {useLayoutEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Container, Stack} from "react-bootstrap";
import CustomButton from "@/components/CustomButton";
import GalleryCard from "@/components/GalleryCard";
import {gallery} from "@/utils/gallery";
import s from "./GalleryPage.module.scss";

type GalleryItem = {
    title: {
        en: string;
        ru: string;
        ua: string;
    };
    date: string;
    mainImg:string;
    images: string[]
}


const GalleryPage = () => {
    const {t} = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [galleryArray, setGalleryArray] = useState<GalleryItem[] | []>([]);
    const MemoizedGalleryCard = React.memo(GalleryCard);


    useLayoutEffect(() => {
        if (gallery.length > galleryArray.length) {
            let itemsPerRow = 3;
            const screenWidth = window.innerWidth;
            if (screenWidth <= 480) {
                itemsPerRow = 4;
            } else if (screenWidth <= 992 && screenWidth > 480) {
                itemsPerRow = 2;
            }
            const someArr = gallery.slice(0, currentIndex + itemsPerRow);
            setGalleryArray([ ...someArr])
        }
    }, [currentIndex, galleryArray.length])



    const handleShowMore = () => {
        let itemsPerRow = 3;
        const screenWidth = window.innerWidth;
        if (screenWidth <= 480) {
            itemsPerRow = 4;
        } else if (screenWidth <= 992 && screenWidth > 480) {
            itemsPerRow = 2;
        }
        const newIndex = currentIndex + itemsPerRow;
        setCurrentIndex(newIndex);
    };


    return (
            <Container className={s.wrapper}>
                <div className={s.container}>
                    <h3 className={s.title}>{t("gallery")}</h3>
                    <div className={s.content}>
                        {gallery.length > 0 && galleryArray.map((galleryItem) =>  <MemoizedGalleryCard key={galleryItem.title.en} galleryItem={galleryItem}/>)}
                    </div>
                    {
                        (galleryArray.length !== gallery.length) &&
                        (<Stack direction="horizontal" style={{justifyContent: "center", marginTop: "70px"}}>
                            <CustomButton onClick={handleShowMore}>{t("showMore")}</CustomButton>
                        </Stack>)
                    }
                </div>
            </Container>
    );
};

export default GalleryPage;
