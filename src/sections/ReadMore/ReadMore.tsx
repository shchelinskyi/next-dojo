import {useEffect, useState} from 'react';
import Image from 'next/image';
import {useTranslation} from "react-i18next";
import usefulTextUA from "@/assets/images/readMore/usefull-text-ua.webp";
import usefulTextRU from "@/assets/images/readMore/usefull-text-ru.webp";
import usefulTextEN from "@/assets/images/readMore/usefull-text-en.webp";
import usefulArrow from "@/assets/images/readMore/useful-arrow.svg";
import usefulArrowM from "@/assets/images/readMore/useful-arrow-m.svg";
import usefulTextS from "@/assets/images/readMore/useful-text-s.svg";
import usefulArrowS from "@/assets/images/readMore/useful-arrow-s.svg";
import finger from "@/assets/images/support/finger-up.svg";
import ReadMoreItem from "@/components/ReadMoreItem";
import {readMoreData} from "@/utils/readMore"
import Glossary from "@/components/ReadMoreItem/Items/Glossary";
import Principles from "@/components/ReadMoreItem/Items/Principles";
import DojoCun from "@/components/ReadMoreItem/Items/DojoCun";
import Etiquette from "@/components/ReadMoreItem/Items/Etiquette";
import Biography from "@/components/ReadMoreItem/Items/Biography";
import Exam from "@/components/ReadMoreItem/Items/Exam";
import Rules from "@/components/ReadMoreItem/Items/Rules";
import RulesKio from "@/components/ReadMoreItem/Items/RulesKio";
import Wko from "@/components/ReadMoreItem/Items/Wko";
import Belts from "@/components/ReadMoreItem/Items/Belts";
import s from "./ReadMore.module.scss";

const ReadMore = () => {
    const [language, setLanguage] = useState("i18n.language");
    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.language;
    const change = t("language");

    useEffect(() => {
        setLanguage(currentLanguage)
    }, [change, currentLanguage]);

    return (
        <>
            <div className={s.wrapper}>
                <h3 className={s.title}>{t("readMore")}</h3>
                <div className={s.contentBlock}>
                    <ReadMoreItem key={readMoreData.glossary.title.en} item={readMoreData.glossary}>
                        <Glossary/>
                    </ReadMoreItem>
                    <ReadMoreItem key={readMoreData.principles.title.en} item={readMoreData.principles}>
                        <Principles/>
                    </ReadMoreItem>
                    <ReadMoreItem key={readMoreData.dojoKun.title.en} item={readMoreData.dojoKun}>
                        <DojoCun/>
                    </ReadMoreItem>
                    <ReadMoreItem key={readMoreData.etiquette.title.en} item={readMoreData.etiquette}>
                        <Etiquette/>
                    </ReadMoreItem>
                    <ReadMoreItem key={readMoreData.biography.title.en} item={readMoreData.biography}>
                        <Biography/>
                    </ReadMoreItem>
                    <ReadMoreItem key={readMoreData.exam.title.en} item={readMoreData.exam}>
                        <Exam/>
                    </ReadMoreItem>
                    <ReadMoreItem key={readMoreData.rules.title.en} item={readMoreData.rules}>
                        <Rules/>
                    </ReadMoreItem>
                    <ReadMoreItem key={readMoreData.rulesKio.title.en} item={readMoreData.rulesKio}>
                        <RulesKio/>
                    </ReadMoreItem>
                    <ReadMoreItem key={readMoreData.wko.title.en} item={readMoreData.wko}>
                        <Wko/>
                    </ReadMoreItem>
                    <ReadMoreItem key={readMoreData.belts.title.en} item={readMoreData.belts}>
                        <Belts/>
                    </ReadMoreItem>


                    <div className={s.usefulBlockS}>
                        {language === "ua" && <Image className={s.usefulText} src={usefulTextUA} alt="useful"/>}
                        {language === "ru" && <Image className={s.usefulText} src={usefulTextRU} alt="useful"/>}
                        {language === "en" && <Image className={s.usefulText} src={usefulTextEN} alt="useful"/>}
                        {language === "ua" && <Image className={s.usefulArrow} src={usefulArrow} alt="useful"/>}
                        {language === "en" && <Image className={s.usefulArrowEN} src={usefulArrow} alt="useful"/>}
                        {language === "ru" && <Image className={s.usefulArrowRU} src={usefulArrow} alt="useful"/>}

                        {language === "ua" && <Image className={s.usefulTextM} src={usefulTextUA} alt="useful"/>}
                        {language === "ru" && <Image className={s.usefulTextM} src={usefulTextRU} alt="useful"/>}
                        {language === "en" && <Image className={s.usefulTextM} src={usefulTextEN} alt="useful"/>}
                        {language === "ua" && <Image src={usefulArrowM} className={s.usefulArrowM} alt="useful"/>}
                        {language === "ru" && <Image src={usefulArrowM} className={s.usefulArrowMRU} alt="useful"/>}
                        {language === "en" && <Image src={usefulArrowM} className={s.usefulArrowMRU} alt="useful"/>}

                        {language === "ua" && <Image className={s.usefulTextS} src={usefulTextS}  alt="useful"/>}
                        {language === "ru" && <Image className={s.usefulTextSRU} src={usefulTextRU}  alt="useful"/>}
                        {language === "en" && <Image className={s.usefulTextSEN} src={usefulTextEN}  alt="useful"/>}
                        {language === "ua" &&<Image src={usefulArrowS} className={s.usefulArrowS} alt="useful"/>}
                        {language === "ru" &&<Image src={usefulArrowS} className={s.usefulArrowSRU} alt="useful"/>}
                        {language === "en" &&<Image src={usefulArrowS} className={s.usefulArrowSEN} alt="useful"/>}
                    </div>
                    <div className={s.fingerBlockS}>
                        <Image src={finger} className={s.fingerImg} alt="useful"/>
                        <span>{t("click")}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReadMore;
