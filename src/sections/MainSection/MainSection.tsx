"use client"
import React, {useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import {useAppDispatch} from "@/lib/hooks";
import {openForm} from "@/lib/store/features/form/formTrialSessionSlice";
import Image from 'next/image';
import {Container} from "react-bootstrap";
import TheHeader from "@/components/TheHeader";
import roundText from "@/assets/images/main/roundText.webp";
import lightning from "@/assets/images/main/lightning.webp";
import volcano from "@/assets/images/main/volcano.webp";
import cloudL from "@/assets/images/main/cloud-l.webp";
import cloudRt from "@/assets/images/main/cloud-rt.webp";
import cloudRb from "@/assets/images/main/cloud-rb.webp";
import build from "@/assets/images/main/build.webp";
import arch from "@/assets/images/main/arch.webp";
import boy1 from "@/assets/images/main/boy1.webp";
import boy11 from "@/assets/images/main/boy1D.webp";
import boy2 from "@/assets/images/main/boy2.webp";
import boy22 from "@/assets/images/main/boy2D.webp";
import fingerDown from "@/assets/images/main/fingerDown.webp";
import bgMain from "@/assets/images/main/bg-main.webp";


import {gagalinFont} from "@/fonts";
import cn from "classnames";
import s from "./MainSection.module.scss";

type RefData = {
    aboutRef: React.RefObject<HTMLDivElement> | null;
    teamRef: React.RefObject<HTMLDivElement> | null;
    gymsRef: React.RefObject<HTMLDivElement> | null;
    galleryRef: React.RefObject<HTMLDivElement> | null;
    newsRef: React.RefObject<HTMLDivElement> | null;
    // shopRef: React.RefObject<HTMLDivElement> | null;
    contactsRef: React.RefObject<HTMLDivElement> | null;
};

interface TheMainPageProps {
    refData: RefData | null;
}

interface Position {
    x: number;
    y: number;
}

const MainSection = ({refData}:TheMainPageProps) => {
    const dispatch = useAppDispatch();

    const [screenType, setScreenType] = useState<
        'mobile' | 'tablet' | 'desktop'
    >('desktop');

    const { t } = useTranslation();

    const boy1Ref = useRef<HTMLImageElement | null>(null);
    const boy2Ref = useRef<HTMLImageElement | null>(null);


    useEffect(() => {
        const updateScreenType = () => {
            if (window.innerWidth <= 480) {
                setScreenType('mobile');
            } else if (window.innerWidth <= 992) {
                setScreenType('tablet');
            } else {
                setScreenType('desktop');
            }
        };

        updateScreenType();

        window.addEventListener('resize', updateScreenType);

        return () => {
            window.removeEventListener('resize', updateScreenType);
        };
    }, []);

    useEffect(() => {
        if (screenType !== 'desktop') return;

        let frameId = 0;

        const handleMouseMove = (e: MouseEvent) => {
            if (frameId) return;

            frameId = requestAnimationFrame(() => {
                const x = e.clientX;
                const y = e.clientY;

                const move = (
                    element: HTMLElement | null,
                    strength: number
                ) => {
                    if (!element) return;

                    element.style.transform =
                        `translate(${x / strength}px, ${y / strength}px)`;
                };

                move(boy1Ref.current, 50);
                // move(boy11Ref.current, 50);

                move(boy2Ref.current, -50);
                // move(boy22Ref.current, -50);

                frameId = 0;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);

            if (frameId) {
                cancelAnimationFrame(frameId);
            }
        };
    }, [screenType]);


    const handleOpenModal = () => {
        dispatch(openForm())
    }

    return (
        <>
        <div className={s.wrapper}>
            <Image
                src={bgMain}
                alt="Фон"
                fill
                priority
                style={{ objectFit: 'cover', objectPosition: 'center', zIndex: -1 }}
            />
            <Container className={s.contentContainer}>

                <div className={s.content}>
                    <div className={s.titleWrapper}>
                        <h1 className={cn(s.mainTitle, gagalinFont.className)}>{t('mainTitle1')}</h1>
                        <h1 className={cn(s.mainTitle, gagalinFont.className, s.secondLine)}>{t('mainTitle2')}</h1>
                    </div>
                    <p className={s.offerContent}>
                        {t("offer")}
                    </p>
                    <div className={cn(s.btnWrapper, s.btnBSize)}>
                        <button onClick={handleOpenModal} className={cn(s.btn)}>
                            {t("wantToBe")} 
                        </button>
                    </div>
                    <div className={cn(s.btnWrapper, s.btnSSize)}>
                        <button className={cn(s.btn)} onClick={handleOpenModal}>
                            {t("wantToBe")}
                        </button>
                    </div>
                </div>
                <div className={s.logoContainer}>
                    <Image className={s.roundText} src={roundText} alt="karate scholl"/>
                    <Image className={s.lightning} src={lightning} alt="lightning"/>
                </div>




                {screenType === 'tablet' ? (
                    <>
                        <Image className={s.boy11} src={boy11} alt="karate" sizes="251px"/>
                        <Image className={s.boy22} src={boy22} alt="karate" sizes="224px"/>
                    </>
                ) : (
                    <>
                        <Image className={s.boy1} src={boy1} ref={boy1Ref} alt="karate" sizes="(max-width: 480px) 157px, (max-width: 1200px) 250px, 335px"/>
                        <Image className={s.boy2} src={boy2} ref={boy2Ref} alt="karate" sizes="(max-width: 480px) 140px, (max-width: 1200px) 224px, 300px"/>
                    </>
                )}



                <Image className={s.build} src={build} alt="build"/>
                <Image className={s.arch} src={arch} alt="arch"/>
                <Image className={s.volcano} src={volcano} alt="volcano"/>
                <Image className={s.cloudRt} src={cloudRt} alt="cloud"/>
                <Image className={s.cloudRb} src={cloudRb} alt="cloud"/>
                <Image className={s.cloudL} src={cloudL} alt="cloud"/>

                <div className={s.moreItem}>
                    <p className={s.fingerText}>{t('more')}</p>
                    <Image src={fingerDown} style={{width: "35px", height:"auto"}} alt="finger down"/>
                </div>
                {/*<div className={s.bucketWrapper} onClick={() => dispatch(openCartModal())}>*/}
                {/*    <Image src={bucket} className={s.bucketIcon}/>*/}
                {/*    <div className={s.badge}>{cartItems.length > 0 ? cartItems.length : null}</div>*/}
                {/*</div>*/}
            </Container>
        </div>
        <div>
            <TheHeader refData={refData}/>
        </div>
        </>
    );
};

export default MainSection;
