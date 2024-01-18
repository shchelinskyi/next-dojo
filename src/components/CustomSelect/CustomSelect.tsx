import { ChangeEvent } from 'react';
import Image from 'next/image';
import iconSelect from "@/assets/images/main/select-flag.webp";
import s from "./CustomSelect.module.scss";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../../i18nConfig';


const CustomSelect = () => {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;

        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = '; expires=' + date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        // @ts-ignore
        if (
            currentLocale === i18nConfig.defaultLocale
        ) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            );
        }

        router.refresh();
    };

    return (
        <div className={s.selectContainer}>
            <select onChange={handleChange} value={currentLocale} className={s.selectBox}>
                <option value="ua">UA</option>
                <option value="ru">RU</option>
                <option value="en">ENG</option>
            </select>
            <div className={s.iconContainer}>
                <Image className={s.selectIcon} src={iconSelect} alt="icon"/>
            </div>
        </div>
    );
};

export default CustomSelect;
