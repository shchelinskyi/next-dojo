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
import CustomButton from "@/components/CustomButton";
import s from "./SupportUsSection.module.scss";




const SupportUsSection = () => {

    const {i18n, t} = useTranslation();
    const language = i18n.language;

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
                    <a href="https://www.buymeacoffee.com/misakdojo" target="_blank" className={s.link}>
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

export default SupportUsSection;
