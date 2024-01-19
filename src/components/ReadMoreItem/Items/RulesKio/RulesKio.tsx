import {useTranslation} from "react-i18next";
import {readMoreData} from "@/utils/readMore";
import s from "./RulesKio.module.scss";
import cn from "classnames";
import {gagalinFont} from "@/fonts/fonts";

const RulesKio = () => {

    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.language;
    const {rulesKio} = readMoreData;

    const paragraphs1 = (rulesKio.text1 as any)[currentLanguage] as string
        ? ((rulesKio.text1 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;
    const paragraphs2 = (rulesKio.text2 as any)[currentLanguage] as string
        ? ((rulesKio.text2 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;
    const paragraphs3 = (rulesKio.text3 as any)[currentLanguage] as string
        ? ((rulesKio.text3 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;
    const paragraphs4 = (rulesKio.text4 as any)[currentLanguage] as string
        ? ((rulesKio.text4 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;
    const paragraphs5 = (rulesKio.text5 as any)[currentLanguage] as string
        ? ((rulesKio.text5 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;
    const paragraphs6 = (rulesKio.text6 as any)[currentLanguage] as string
        ? ((rulesKio.text6 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;

    return (
        <div className={s.container}>
            <h4 className={cn(s.title, gagalinFont.className)}>
                {t(`rulesKio.title.${currentLanguage}`, (rulesKio.title as any)[currentLanguage] as string)}
            </h4>
            {paragraphs1}
            {paragraphs2}
            <p className={s.contentTitle}>
                {t(`rulesKio.label1.${currentLanguage}`, (rulesKio.label1 as any)[currentLanguage] as string)}
            </p>
            {paragraphs3}
            <p className={s.contentTitle}>
                {t(`rulesKio.label2.${currentLanguage}`, (rulesKio.label2 as any)[currentLanguage] as string)}
            </p>
            {paragraphs4}
            <p className={s.contentTitle}>
                {t(`rulesKio.label3.${currentLanguage}`, (rulesKio.label3 as any)[currentLanguage] as string)}
            </p>
            {paragraphs5}
            <p className={s.contentTitle}>
                {t(`rulesKio.label4.${currentLanguage}`, (rulesKio.label4 as any)[currentLanguage] as string)}
            </p>
            {paragraphs6}
        </div>
    );
};

export default RulesKio;
