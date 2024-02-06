"use client"
import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {useRef} from "react";
import {usePathname} from "next/navigation";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import MainSection from "@/sections/MainSection";
import AboutSection from "@/sections/AboutSection";
import NewsSection from "@/sections/NewsSection";
import GallerySection from "@/sections/GallerySection";
import TeamSection from "@/sections/TeamSection";
import GymsSection from "@/sections/GymsSection";
import ReadMore from "@/sections/ReadMore";
import ContactsSection from "@/sections/ContactsSection";
import SupportUsSection from "@/sections/SupportUsSection";
import Ticker from "@/sections/Ticker";
import TrialLessonSection from "@/sections/TrialLessonSection";
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
            <MainSection refData={data}/>
            <section ref={aboutRef} style={{paddingTop:"100px"}}>
                <AboutSection/>
            </section>
            <section ref={teamRef}>
                <TeamSection/>
            </section>
            <section ref={gymsRef}>
                <GymsSection/>
            </section>
            <TrialLessonSection/>
            <section ref={galleryRef}>
                <GallerySection/>
            </section>
            <SupportUsSection/>
            <Ticker/>
            {/*<div ref={shopRef}>*/}
            {/*    <ShopSection/>*/}
            {/*</div>*/}
            <section ref={newsRef}>
                <NewsSection />
            </section>
            <ReadMore/>
            <section ref={contactsRef}>
                <ContactsSection/>
            </section>
        </>
    );
};

export default Main;
