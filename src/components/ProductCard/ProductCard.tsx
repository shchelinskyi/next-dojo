import {FC, useState} from "react";
import {useTranslation} from "react-i18next";
import MainProductCard from "@/components/MainProductCard";
import s from "./ProductCard.module.scss";

export type ProductItemType = {
    id: string;
    title: {
        en: string,
        ru: string,
        uk: string
    };
    price: number;
    images: string[] | [];
    category: string;
    size: string[] | [];
    material?: {
        en: string,
        ru: string,
        uk: string
    };
    color: string[] | [];
    children: boolean;
    adult: boolean;
    description: {
        en: string,
        ru: string,
        uk: string
    },
    briefDescription: {
        en: string,
        ru: string,
        uk: string
    },
    model?: string;
    producer?: string;
    length?: string;
    comment:{
        en: string,
        ru: string,
        uk: string
    };
}

type ProductItemProps = {
    productItem: ProductItemType
}

const ProductCard:FC<ProductItemProps> = ({productItem }) => {
    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.language;

    const [isModalOpened, setIsModalOpened] = useState(false);

    const handleOpenProduct = () => {
        document.documentElement.style.setProperty('overflow-y', 'hidden' );
        setIsModalOpened(true);
    }

    const handleCloseProductModal = () => {
        document.documentElement.style.setProperty('overflow-y', 'auto');
        setIsModalOpened(false);
    }

    return (
        <>
            <div className={s.card} onClick={handleOpenProduct}>
                <div className={s.imgWrapper}>
                    <img className={s.productImg} src={productItem.images[0]} alt="product"/>
                </div>
                <div className={s.textBlock}>
                    <h6 className={s.productTitle}>{t(`title.${currentLanguage}`, (productItem.title as any)[currentLanguage] as string)}</h6>
                    <h6 className={s.productPrice}>{productItem.price} <span>{t("uah")}</span></h6>
                </div>

            </div>
            {isModalOpened && <MainProductCard productItem={productItem} onClose={handleCloseProductModal}/>}
        </>

    );
};

export default ProductCard;
