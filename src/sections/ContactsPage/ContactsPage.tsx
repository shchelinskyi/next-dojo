"use client"

import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import Image from 'next/image';
import ContactGymSocial from "@/components/ContactGymSocial";
import FormBlock from "@/components/FormBlock";
import {address} from "@/utils/addressGym";
import ua from "@/assets/images/contacts/ua.webp";
import waitUA from "@/assets/images/contacts/wait-ua.webp";
import waitRU from "@/assets/images/contacts/wait-ru.webp";
import waitEN from "@/assets/images/contacts/wait-en.webp";
import {gagalinFont} from "@/fonts";
import cn from "classnames";
import s from "./ContactsPage.module.scss";

const ContactsPage = () => {
    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.language;
    const [language, setLanguage] = useState("i18n.language");
    const change = t("language");

    useEffect(() => {
        setLanguage(currentLanguage)
    }, [change, currentLanguage]);

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <h3 className={cn(s.contactsTitle, gagalinFont.className)}>{t("ourContacts")}</h3>
                <div className={s.content}>
                    <ContactGymSocial
                        address={t("gymFull1")}
                        addressLink={address.gym1}
                        email="MisakDojo@gmail.com"
                        phone="+38 (099) 042 08 20"
                        underground={t("underground1")}
                        socialLinks={
                            {
                                instagramLink: "https://instagram.com/misakdojo",
                                facebookLink: "https://facebook.com/misakdojo",
                                youtubeLink: "https://www.youtube.com/@misakdojo/featured",
                                telegramLink: "https://t.me/misakarzum"
                            }
                        }
                    />

                    <ContactGymSocial
                        address={t("gymFull2")}
                        addressLink={address.gym2}
                        email="MisakDojo@gmail.com"
                        phone="+38 (099) 042 08 20"
                        underground={t("underground2")}
                        socialLinks={
                            {
                                instagramLink: "https://instagram.com/misakdojo/",
                                facebookLink: "https://facebook.com/misakdojo/",
                                youtubeLink: "https://www.youtube.com/@misakdojo/featured",
                                telegramLink: "https://t.me/misakarzum"
                            }
                        }
                    />

                    <ContactGymSocial
                        address={t("gymFull3")}
                        addressLink={address.gym3}
                        phone="+38 (093) 726 54 24"
                        underground={t("underground3")}
                        socialLinks={
                            {
                                instagramLink: "https://www.instagram.com/karate.kostuk/",
                            }
                        }
                    />
                    <div className={s.line}></div>
                    <FormBlock/>
                    <div className={s.logoContainer}>
                        {language === "ua" && <Image className={s.logo} src={waitUA} alt="logo"/>}
                        {language === "ru" && <Image className={s.logo} src={waitRU} alt="logo"/>}
                        {language === "en" && <Image className={s.logo} src={waitEN} alt="logo"/>}
                        <Image className={s.uaIcon} src={ua} alt="ua"/>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ContactsPage;
