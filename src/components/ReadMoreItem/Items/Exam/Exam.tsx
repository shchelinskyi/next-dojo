import {useTranslation} from "react-i18next";
import {readMoreData} from "@/utils/readMore";
import s from "./Exam.module.scss";
import cn from "classnames";
import {gagalinFont} from "@/fonts/fonts";

const Exam = () => {
    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.language;
    const {exam} = readMoreData;

    const paragraphs1 = (exam.text1 as any)[currentLanguage] as string
        ? ((exam.text1 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;

    return (
        <div className={s.container}>
            <h4 className={cn(s.title, gagalinFont.className)}>{t(`exam.title.${currentLanguage}`,(exam.title as any)[currentLanguage] as string)}:</h4>
            {paragraphs1}
        </div>
    );
};

export default Exam;
