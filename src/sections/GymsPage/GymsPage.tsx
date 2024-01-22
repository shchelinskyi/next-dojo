import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import ContactGym from "@/components/ContactGym";
import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import {Container} from "react-bootstrap";
import num1 from "@/assets/images/gyms/num1.svg";
import num2 from "@/assets/images/gyms/num2.svg";
import num3 from "@/assets/images/gyms/num3.svg";
import signature from "@/assets/images/gyms/signature.svg";
import smile from "@/assets/images/gyms/smile.svg";
import smile2 from "@/assets/images/gyms/smile2.svg";
import scroll from "@/assets/images/gyms/scroll.svg";
import eyes from "@/assets/images/gyms/eyes.svg";
import mondayUA from "@/assets/images/gyms/monday-ua.webp";
import tuesdayUA from "@/assets/images/gyms/tuesday-ua.webp";
import wednesdayUA from "@/assets/images/gyms/wednesday-ua.webp";
import thursdayUA from "@/assets/images/gyms/thursday-ua.webp";
import fridayUA from "@/assets/images/gyms/friday-ua.webp";
import saturdayUA from "@/assets/images/gyms/saturday-ua.webp";
import mondayRU from "@/assets/images/gyms/monday-ru.webp";
import tuesdayRU from "@/assets/images/gyms/tuesday-ru.webp";
import wednesdayRU from "@/assets/images/gyms/wednesday-ru.webp";
import thursdayRU from "@/assets/images/gyms/thursday-ru.webp";
import fridayRU from "@/assets/images/gyms/friday-ru.webp";
import saturdayRU from "@/assets/images/gyms/saturday-ru.webp";
import mondayEN from "@/assets/images/gyms/monday-en.webp";
import tuesdayEN from "@/assets/images/gyms/tuesday-en.webp";
import wednesdayEN from "@/assets/images/gyms/wednesday-en.webp";
import thursdayEN from "@/assets/images/gyms/thursday-en.webp";
import fridayEN from "@/assets/images/gyms/friday-en.webp";
import saturdayEN from "@/assets/images/gyms/saturday-en.webp";
import {address} from "@/utils/addressGym";
import cn from "classnames";
import s from "./GymsPage.module.scss";
import {gagalinFont} from "@/fonts";


const GymsPage = () => {
    const [isBlockVisible1, setIsBlockVisible1] = useState(false);
    const [isBlockVisible2, setIsBlockVisible2] = useState(false);
    const [isBlockVisible3, setIsBlockVisible3] = useState(false);

    const { i18n, t } = useTranslation();
    const language = i18n.language;


    const toggleVisibility = (numBlock:number) => {
        if (numBlock === 1) {
            setIsBlockVisible1(!isBlockVisible1);
        } else if (numBlock === 2) {
            setIsBlockVisible2(!isBlockVisible2);
        } else {
            setIsBlockVisible3(!isBlockVisible3);
        }

    };

    return (
        <div className={s.wrapper}>
            <h3 className={cn(s.title, gagalinFont.className)}>{t("ourGyms")}</h3>
            <Container className={s.content}>
                <div className={s.gymBlock}>
                    <div className={s.gymTitle}>
                        <ContactGym address={t("gym1")}  addressLink={address.gym1} phone="+38 (099) 042 08 20"/>
                    </div>
                    <div className={s.btnShow}>
                        <CustomButton style={{width:"100%"}} onClick={()=>toggleVisibility(1)}>{t("scheduleSee")}</CustomButton>
                    </div>
                    <div className={cn(s.gymContent, { [s.showContent]: isBlockVisible1 })}>
                        <div className={cn(s.item3times, s.order1)}>
                            {language === "ua" && <Image className={s.dayIcon} src={mondayUA} alt="понеділок"/>}
                            {language === "ru" && <Image className={s.dayIcon} src={mondayRU} alt="понедельник"/>}
                            {language === "en" && <Image className={s.dayIcon} src={mondayEN} alt="monday"/>}
                            <div>
                                <li className={s.timeText}>17:30 - 18:30</li>
                                <p className={s.text}>{t("group3")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>18:30 - 20:00</li>
                                <p className={s.text}>{t("group2")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>20:00 - 22:00</li>
                                <p className={s.text}>{t("group1")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item3times, s.order3)}>
                            <Image className={s.smileIcon} src={smile} alt="smile"/>
                            {language === "ua" && <Image className={s.dayIcon} src={wednesdayUA} alt="середа"/>}
                            {language === "ru" && <Image className={s.dayIcon} src={wednesdayRU} alt="среда"/>}
                            {language === "en" && <Image className={s.dayIcon} src={wednesdayEN} alt="wednesday"/>}
                            <div>
                                <li className={s.timeText}>17:30 - 18:30</li>
                                <p className={s.text}>{t("group3")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>18:30 - 20:00</li>
                                <p className={s.text}>{t("group2")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>20:00 - 22:00</li>
                                <p className={s.text}>{t("group1")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2times, s.order5)}>
                            {language === "ua" && <Image className={s.dayIcon} src={fridayUA} alt="п'ятниця"/>}
                            {language === "ru" && <Image className={s.dayIcon} src={fridayRU} alt="пятница"/>}
                            {language === "en" && <Image className={s.dayIcon} src={fridayEN} alt="friday"/>}
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>{t("group4")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>20:00 - 21:00</li>
                                <p className={s.text}>{t("group5")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2times, s.order2)}>
                            <Image className={s.signatureIcon} src={signature} alt="signature"/>
                            {language === "ua" && <Image className={s.dayIcon} src={tuesdayUA} alt="вівторок"/>}
                            {language === "ru" && <Image className={s.dayIcon} src={tuesdayRU} alt="вторник"/>}
                            {language === "en" && <Image className={s.dayIcon} src={tuesdayEN} alt="tuesday"/>}
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>{t("group4")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>20:00 - 21:00</li>
                                <p className={s.text}>{t("group5")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item3times, s.order4)}>
                            {language === "ua" && <Image className={s.dayIcon} src={thursdayUA} alt="четвер"/>}
                            {language === "ru" && <Image className={s.dayIcon} src={thursdayRU} alt="четверг"/>}
                            {language === "en" && <Image className={s.dayIcon} src={thursdayEN} alt="thursday"/>}
                            <div>
                                <li className={s.timeText}>17:30 - 18:30</li>
                                <p className={s.text}>{t("group3")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>18:30 - 20:00</li>
                                <p className={s.text}>{t("group2")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>20:00 - 22:00</li>
                                <p className={s.text}>{t("group1")}</p>
                            </div>
                        </div>
                    </div>
                    <Image className={s.numIcon} src={num1} alt="number"/>
                    <div className={s.line}></div>
                </div>

                <div className={s.gymBlock}>
                    <div className={s.gymTitle}>
                        <ContactGym address={t("gym2")}  addressLink={address.gym2} phone="+38 (099) 042 08 20"/>
                    </div>
                    <div className={s.btnShow}>
                        <CustomButton style={{width:"100%"}} onClick={()=>toggleVisibility(2)}>{t("scheduleSee")}</CustomButton>
                    </div>
                    <div className={cn(s.gymContent, { [s.showContent]: isBlockVisible2 })}>
                        <div className={cn(s.item2times, s.order1)}>
                            {language === "ua" && <Image className={s.dayIcon} src={mondayUA} alt="понеділок"/>}
                            {language === "ru" && <Image className={s.dayIcon} src={mondayRU} alt="понедельник"/>}
                            {language === "en" && <Image className={s.dayIcon} src={mondayEN} alt="monday"/>}
                            <div>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>{t("group6")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>{t("group7")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2times, s.order3)}>
                            {language === "ua" && <Image className={s.dayIcon} src={wednesdayUA} alt="середа"/>}
                            {language === "ru" && <Image className={s.dayIcon} src={wednesdayRU} alt="среда"/>}
                            {language === "en" && <Image className={s.dayIcon} src={wednesdayEN} alt="wednesday"/>}
                            <div>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>{t("group6")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>{t("group7")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2times, s.order5)}>
                            {language === "ua" && <Image className={s.dayIcon} src={fridayUA} alt="п'ятниця"/>}
                            {language === "ru" && <Image className={s.dayIcon} src={fridayRU} alt="пятница"/>}
                            {language === "en" && <Image className={s.dayIcon} src={fridayEN} alt="friday"/>}
                            <Image className={s.scrollIcon} src={scroll} alt="scroll"/>
                            <div>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>{t("group6")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>{t("group7")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2times, s.order2)}>
                            {language === "ua" && <Image className={s.dayIcon} src={tuesdayUA} alt="вівторок"/>}
                            {language === "ru" && <Image className={s.dayIcon} src={tuesdayRU} alt="вторник"/>}
                            {language === "en" && <Image className={s.dayIcon} src={tuesdayEN} alt="tuesday"/>}
                            <Image className={s.eyesIcon} src={eyes} alt="eyes"/>
                            <div>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>{t("group6")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>{t("group7")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2times, s.order4)}>
                            {language === "ua" && <Image className={s.dayIcon} src={thursdayUA} alt="четверг" />}
                            {language === "ru" && <Image className={s.dayIcon} src={thursdayRU} alt="четверг"/>}
                            {language === "en" && <Image className={s.dayIcon} src={thursdayEN} alt="thursday"/>}
                            <div>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>{t("group6")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>{t("group7")}</p>
                            </div>
                        </div>
                    </div>
                    <Image className={s.numIcon} src={num2} alt="number"/>
                    <div className={s.line}></div>
                </div>

                <div className={s.gymBlock}>
                    <div className={s.gymTitle}>
                        <ContactGym  address={t("gym3")}  addressLink={address.gym3} phone="+38 (093) 726 54 24"/>
                    </div>
                    <div className={s.btnShow}>
                        <CustomButton style={{width:"100%"}} onClick={()=>toggleVisibility(3)}>{t("scheduleSee")}</CustomButton>
                    </div>
                    <div className={cn(s.gymContent, { [s.showContent]: isBlockVisible3 }, s.thirdGym)}>

                        <div className={cn(s.item2times)}>
                            {language === "ua" && <Image className={s.dayIcon} src={tuesdayUA} alt="вівторок"/>}
                            {language === "ru" && <Image className={s.dayIcon} src={tuesdayRU} alt="вторник"/>}
                            {language === "en" && <Image className={s.dayIcon} src={tuesdayEN} alt="tuesday"/>}
                            <div>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>{t("group10")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>19:00 - 20:30</li>
                                <p className={s.text}>{t("group9")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2times, s.order3)}>
                            {language === "ua" && <Image className={s.dayIcon} src={saturdayUA} alt="субота"/>}
                            {language === "ru" && <Image className={s.dayIcon} src={saturdayRU} alt="суббота"/>}
                            {language === "en" && <Image className={s.dayIcon} src={saturdayEN} alt="saturday"/>}
                            <div>
                                <li className={s.timeText}>10:30 - 11:30</li>
                                <p className={s.text}>{t("group10")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>11:30 - 13:00</li>
                                <p className={s.text}>{t("group9")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2times)}>
                            <Image className={s.smile2Icon} src={smile2} alt="smile"/>
                            {language === "ua" && <Image className={s.dayIcon} src={thursdayUA} alt="четверг"/>}
                            {language === "ru" && <Image className={s.dayIcon} src={thursdayRU} alt="четверг"/>}
                            {language === "en" && <Image className={s.dayIcon} src={thursdayEN} alt="thursday"/>}
                            <div>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>{t("group10")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>19:00 - 20:30</li>
                                <p className={s.text}>{t("group9")}</p>
                            </div>
                        </div>

                    </div>
                    <Image className={s.numIcon} src={num3} style={{bottom: 0}} alt="number"/>
                </div>

            </Container>
        </div>
    );
};

export default GymsPage;
