import {useTranslation} from "react-i18next";
import {readMoreData} from "@/utils/readMore";
import s from "./DojoCun.module.scss";
import cn from "classnames";
import {gagalinFont} from "@/fonts";


const DojoCun = () => {
    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.language;
    const {dojoKun} = readMoreData;
    return (
        <div className={s.container}>
            <h4 className={cn(s.title, gagalinFont.className)}>{t(`dojoKun.subTitle.${currentLanguage}`, (dojoKun.subTitle as any)[currentLanguage] as string)}:</h4>
            <div className={s.content}>
                {((dojoKun.list as any)[currentLanguage] as string[]).map((item: string) => (
                    <div key={item}>
                        <h5 className={s.contentTitle}>{(dojoKun.swear as any)[currentLanguage] as string}:</h5>
                        <p className={s.contentItem}>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DojoCun;
