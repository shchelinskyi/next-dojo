import {CSSProperties, FC, useState} from 'react';
import {useTranslation} from "react-i18next";
import GalleryCardModal from "./GalleryCardModal";
import s from "./GalleryCard.module.scss";

type GalleryCardTypes = {
    galleryItem: {
        title: {
            en: string,
            ru: string,
            ua: string
        },
        date: string;
        mainImg: string;
        images: string[]
    },
    styles?: CSSProperties;
}

const GalleryCard: FC<GalleryCardTypes> = ({galleryItem, styles}) => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.language;

    const handleOpen = () => {
        document.documentElement.style.setProperty('overflow-y', 'hidden');
        setIsModalOpened(true);
    }

    const handleClose = () => {
        document.documentElement.style.setProperty('overflow-y', 'auto');
        setIsModalOpened(false);
    }

    return (
        <>
            <div className={s.card} onClick={handleOpen} style={styles}>
                <div className={s.imgWrapper}>
                    <img className={s.cardImg} src={galleryItem.mainImg} alt="🥋" width={370} height={330}
                           sizes="(min-width: 1201px) 370px, 330px, (max-width: 1200px) 290px, 260px, (max-width: 992px) 324px, 290px, (max-width: 480px) 310px, 278px "/>
                </div>
                <p className={s.cardDate}>{galleryItem.date}</p>
                <h6 className={s.cardTitle}>{t(`title.${currentLanguage}`, (galleryItem.title as any)[currentLanguage] as string)}</h6>
            </div>
            {isModalOpened && <GalleryCardModal images={galleryItem.images} onClose={handleClose}/>}
        </>

    );
};

export default GalleryCard;
