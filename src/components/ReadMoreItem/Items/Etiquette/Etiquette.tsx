import {useTranslation} from "react-i18next";
import {readMoreData} from "@/utils/readMore";
import s from "./Etiquette.module.scss";
import cn from "classnames";
import {gagalinFont} from "@/fonts";

const Etiquette = () => {
    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.language;
    const {etiquette} = readMoreData;
    return (
        <div className={s.container}>
            <h4 className={cn(s.title, gagalinFont.className)}>{t(`etiquette.title.${currentLanguage}`,(etiquette.title as any)[currentLanguage] as string)}:</h4>
            <p>{(etiquette.label as any)[currentLanguage] as string}</p>
            <ol className={s.content}>
                {((etiquette.list as any)[currentLanguage] as string[]).map((item: string) => (
                        <li key={item} className={s.contentItem}>{item}</li>
                ))}
            </ol>
        </div>
    );
};

export default Etiquette;
