"use server"
import {ReactElement} from "react";
import initTranslations from "@/app/i18n";
import Image from 'next/image';
import Link from 'next/link';
import visaIcon from "@/assets/images/footer/visa.svg";
import masterCard from "@/assets/images/footer/mastercard.svg";
import cn from "classnames"
import s from "./TheFooter.module.scss";

const i18nNamespaces = ['common'];

type TheFooterProps = {
    params: {
        locale: string
    }
}

const TheFooter = async ({locale}:{locale:string}): Promise<ReactElement>  => {
    const { t } = await initTranslations(locale, i18nNamespaces);

    return (
        <div className={s.wrapper}>
            <div className={s.contentBlock}>
                <div className={cn(s.footerContent, s.order2)}>
                    <div className={cn(s.column, s.links)}>
                        <p className={s.textContent}>{t("design")}: <span className={s.link}>Maria Oliynyk</span></p>
                        <p className={s.textContent}>{t("development")}: <a href="https://www.linkedin.com/in/shchelinskyi/" className={s.link} target="_blank">Artem Shchelinskyi</a></p>
                    </div>
                </div>
                <div className={cn(s.footerContent, s.order3)}>
                    <div className={cn(s.column, s.rightBlock)}>
                        <p className={s.textRightReserve}>© Misak Dojo, 2023</p>
                        <p className={s.textRightReserve}>{t("rights")}</p>
                    </div>
                </div>
                <div className={cn(s.footerContent, s.order1)}>
                    <div className={s.column}>
                        <div className={s.iconBlock}>
                            <Image className={s.visaIcon} src={visaIcon} alt="visa"/>
                            <Image className={s.masterCardIcon} src={masterCard} alt="master-card"/>
                        </div>
                        <Link className={s.link2} href="/contractOffer">
                            <p className={s.textRightReserve}>{t("agreement")}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheFooter;
