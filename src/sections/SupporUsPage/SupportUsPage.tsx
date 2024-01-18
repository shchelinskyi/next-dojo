import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import Image from "next/image";
import spiral from "@/assets/images/support/spiral-support.svg";
import heartY from "@/assets/images/support/heart-y.svg";
import heartB from "@/assets/images/support/heart-b.svg";
import hands from "@/assets/images/support/hands.svg";
import supportUA from "@/assets/images/support/support-ua.webp";
import supportRU from "@/assets/images/support/support-ru.webp";
import supportEN from "@/assets/images/support/support-en.webp";
import btnLabel from "@/assets/images/support/btn-label.svg";
import finger from "@/assets/images/support/finger-up.svg";
import s from "./SupportUsPage.module.scss";
import CustomButton from "@/components/CustomButton";



const SupportUsPage = () => {

    const {i18n, t} = useTranslation();
    const currentLanguage = i18n.language;
    const [language, setLanguage] = useState("i18n.language");

    const change = t("language");

    useEffect(() => {
        setLanguage(currentLanguage)
    }, [change, currentLanguage]);

    return (
        <div className={s.wrapper}>
            <div className={s.contentWrapper}>
                <div className={s.content}>
                    <span>{t("support1")}</span>
                    <Image src={hands} className={s.handsIcon} alt="icon"/>
                    <span> {t("support2")}</span><br/>
                    <Image src={heartY} className={s.heartIcon} alt="icon" />
                    <Image src={heartB} className={s.heartIcon} alt="icon" />
                    <span>{t("support3")}</span>
                </div>
                <div className={s.supportBlock}>
                    <Image src={spiral} className={s.spiralImg} alt="icon"/>
                    {language === "ua" && <Image src={supportUA} className={s.supportLabel} alt="icon"/>}
                    {language === "ru" && <Image src={supportRU} className={s.supportLabel} alt="icon"/>}
                    {language === "en" && <Image src={supportEN} className={s.supportLabel} alt="icon"/>}
                    <a href="https://www.buymeacoffee.com/misakdojo" target="_blank">
                        <CustomButton>
                            <Image src={btnLabel} className={s.btnLabel} alt="icon"/>
                        </CustomButton>
                    </a>
                    {language === "ua" && <div className={s.fingerBlock}>
                        <Image src={finger} className={s.fingerImg} alt="icon"/>
                        <span>{t("click")}</span>
                    </div>}
                    {language === "ru" && <div className={s.fingerBlock}>
                        <Image src={finger} className={s.fingerImg} alt="icon"/>
                        <span>{t("click")}</span>
                    </div>}
                    {language === "en" && <div className={s.fingerBlockEN}>
                        <Image src={finger} className={s.fingerImg} alt="icon"/>
                        <span>{t("click")}</span>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default SupportUsPage;
