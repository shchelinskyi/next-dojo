"use client"
import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {useRef} from "react";
import {usePathname} from "next/navigation";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import MainPage from "@/sections/MainPage";
import AboutPage from "@/sections/AboutPage";
import NewsPage from "@/sections/NewsPage";
import GalleryPage from "@/sections/GalleryPage";
import TeamPage from "@/sections/TeamPage";
import GymsPage from "@/sections/GymsPage";
import ReadMore from "@/sections/ReadMore";
import ContactsPage from "@/sections/ContactsPage";
import SupportUsPage from "@/sections/SupporUsPage";
import Ticker from "@/sections/Ticker";
import TrialLessonPage from "@/sections/TrialLessonPage";
import FormTrialSession from "@/components/FormTrialSession";
import InformModal from "@/components/InformModal";
import Cart from "@/components/Cart";
import {closeInfoModal} from "@/lib/store/features/form/formTrialSessionSlice";
import {closeAddToCartModal, closeOrderedModal, openCartModal} from "@/lib/store/features/cart/cartSlice";
import s from "./Main.module.scss";

const Main = () => {

    const aboutRef = useRef<HTMLDivElement>(null);
    const teamRef = useRef<HTMLDivElement>(null);
    const gymsRef = useRef<HTMLDivElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);
    const newsRef = useRef<HTMLDivElement>(null);
    // const shopRef = useRef<HTMLDivElement>(null);
    const contactsRef = useRef<HTMLDivElement>(null);

    const data = {aboutRef, teamRef, gymsRef, galleryRef, newsRef, contactsRef }

    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const currentPathname = usePathname();

    const isFormOpen = useAppSelector(state => state.formTrial.isOpenedForm);
    const isCartOpened = useAppSelector(state => state.cart.isOpenedCartModal);
    const isOpenedSuccessModal = useAppSelector(state => state.formTrial.isOpenedSuccessModal);
    const isOpenedAddToCartModal = useAppSelector(state => state.cart.isOpenedAddToCartModal);
    const isOpenedOrderedModal = useAppSelector(state => state.cart.isOpenedOrderedModal);


    const handleClickBtn = () => {
        dispatch(closeAddToCartModal())
        dispatch(openCartModal())
    }


    return (
        <>
            {isFormOpen && <FormTrialSession/>}
            {isOpenedSuccessModal && <InformModal onClose={() => dispatch(closeInfoModal())}>{t("infoText")}</InformModal>}
            {isOpenedAddToCartModal && <InformModal onClose={() => dispatch(closeAddToCartModal())}><div>
                {t("addToCart")}
            </div>
                <button onClick={handleClickBtn} className={s.orderBtn}>
                    {t("orderBtn")}
                </button>
            </InformModal>}
            {isOpenedOrderedModal && <InformModal onClose={() => dispatch(closeOrderedModal())}>{t("ordered")}</InformModal>}
            {isCartOpened && <Cart/>}
            <MainPage refData={data}/>
            <div ref={aboutRef} style={{paddingTop:"100px"}}>
                <AboutPage/>
            </div>
            <div ref={teamRef}>
                <TeamPage/>
            </div>
            <div ref={gymsRef}>
                <GymsPage/>
            </div>
            <TrialLessonPage/>
            <div ref={galleryRef}>
                <GalleryPage/>
            </div>
            <SupportUsPage/>
            <Ticker/>
            {/*<div ref={shopRef}>*/}
            {/*    <ShopPage/>*/}
            {/*</div>*/}
            <div ref={newsRef}>
                <NewsPage />
            </div>
            <ReadMore/>
            <div ref={contactsRef}>
                <ContactsPage/>
            </div>
        </>
    );
};

export default Main;
