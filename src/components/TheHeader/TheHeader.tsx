"use client"
import React, { useEffect, useState} from "react";
import _debounce from 'lodash/debounce';
import {useTranslation} from "react-i18next";
import {usePathname, useRouter} from "next/navigation";
import Image from 'next/image';
import {Container,Nav, Navbar} from "react-bootstrap";
import CustomSelect from "@/components/CustomSelect";
import CustomButton from "@/components/CustomButton";
import CustomNavbarToggle from "@/components/CustomNavbarToggle";
import SocialLinks from "@/components/SocialLinks";
import logo from "@/assets/images/main/logo.webp";
import fistLogo from "@/assets/images/main/fistLogo.webp";
import i18nConfig from "../../../i18nConfig";
import cn from "classnames";
import s from "./TheHeader.module.scss";
import {useAppDispatch} from "@/lib/hooks";
import {openForm} from "@/lib/store/features/form/formTrialSessionSlice";

type RefData = {
    aboutRef: React.RefObject<HTMLDivElement> | null;
    teamRef: React.RefObject<HTMLDivElement> | null;
    gymsRef: React.RefObject<HTMLDivElement> | null;
    galleryRef: React.RefObject<HTMLDivElement> | null;
    newsRef: React.RefObject<HTMLDivElement> | null;
    // shopRef: React.RefObject<HTMLDivElement> | null;
    contactsRef: React.RefObject<HTMLDivElement> | null;
};

interface TheHeaderProps {
    refData: RefData | null;
}

const TheHeader = ({refData}:TheHeaderProps) => {

    const { t, i18n } = useTranslation();
    const activeLang = i18n.language;
    const dispatch = useAppDispatch();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChange = (lang : string) => {
        const newLocale = lang;

        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = '; expires=' + date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

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


    // const [activeLang, setActiveLang] = useState(i18n.language);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerHeight = 100;


    const navigateToAbout = () => {
        if (refData && refData.aboutRef && refData.aboutRef.current) {
            const contactsTop = refData.aboutRef.current.offsetTop - headerHeight;
            window.scrollTo({ top: contactsTop, behavior: 'smooth' });
        }
    }

    const navigateToGyms = () => {
        if (refData && refData.gymsRef && refData.gymsRef.current) {
            const contactsTop = refData.gymsRef.current.offsetTop - headerHeight;
            window.scrollTo({ top: contactsTop, behavior: 'smooth' });
        }
    }

    const navigateToTeam = () => {
        if (refData && refData.teamRef && refData.teamRef.current) {
            const contactsTop = refData.teamRef.current.offsetTop - headerHeight;
            window.scrollTo({ top: contactsTop, behavior: 'smooth' });
        }
    }

    const navigateToGallery = () => {
        if (refData && refData.galleryRef && refData.galleryRef.current) {
            const contactsTop = refData.galleryRef.current.offsetTop - headerHeight;
            window.scrollTo({ top: contactsTop, behavior: 'smooth' });
        }
    }

    const navigateToNews = () => {
        if (refData && refData.newsRef && refData.newsRef.current) {
            const contactsTop = refData.newsRef.current.offsetTop - headerHeight;
            window.scrollTo({ top: contactsTop, behavior: 'smooth' });
        }
    }

    // const navigateToShop = () => {
    //     if (refData && refData.shopRef && refData.shopRef.current) {
    //         refData.shopRef.current.scrollIntoView({behavior: 'smooth'})
    //     }
    // }


    const navigateToContacts = () => {
        if (refData && refData.contactsRef && refData.contactsRef.current) {
            const contactsTop = refData.contactsRef.current.offsetTop - headerHeight;
            window.scrollTo({ top: contactsTop, behavior: 'smooth' });
        }
    }

    useEffect(() => {
        const handleScroll = _debounce(() => {
            setIsScrolled(window.scrollY > 300);
        }, 100);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const backgroundColor = (isScrolled || isMenuOpen) ? 'white' : '#dedede';

    const handleClick = () => {
        dispatch(openForm())
    };

    const clickLogo = () => {

        if (currentPathname == "/" || currentPathname == "/ru" || currentPathname == "/en"  ) {
            window.scrollTo({
                top: 10,
                behavior: 'smooth',
            });
        } else {
            const locale = i18n.language;
            router.push('/' + locale);
            router.refresh();
        }
    }

    return (
        <>
            <Navbar expand="lg" className={s.wrapper} style={{ backgroundColor }} expanded={isMenuOpen} onToggle={(expanded) => setIsMenuOpen(expanded)}>
                <Container className={s.container} style={{minWidth: "335px"}}>
                    <Navbar.Brand onClick={() => clickLogo()} style={{cursor: "pointer"}}>
                        <Image className={s.logo} src={logo} alt="dojo-logo"/>
                        <Image className={s.fistLogo} src={fistLogo} width={65} height={50}  alt="dojo-logo"/>
                    </Navbar.Brand>
                    <div className={s.btnWrapper}>
                        <CustomButton onClick={handleClick}>{t('signUp')}</CustomButton>
                    </div>
                    <Navbar.Toggle style={{border: "none"}} as="div">
                        <CustomNavbarToggle isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav" className={s.collapse}>
                        <Nav className={cn(s.menu)}>
                            <Nav.Link className={s.link}
                                      onClick={() => { navigateToAbout(); setIsMenuOpen(false); }}>{t('aboutUs')}</Nav.Link>
                            <Nav.Link className={s.link} onClick={() => {navigateToTeam(); setIsMenuOpen(false);}}>{t('team')}</Nav.Link>
                            <Nav.Link className={s.link} onClick={() => {navigateToGyms(); setIsMenuOpen(false);}}>{t('gym')}</Nav.Link>
                            <Nav.Link className={s.link} onClick={() => {navigateToGallery(); setIsMenuOpen(false);}}>{t('gallery')}</Nav.Link>
                            {/*<Nav.Link className={s.link} onClick={() => {navigateToShop(); setIsMenuOpen(false);}}>{t('shop')}</Nav.Link>*/}
                            <Nav.Link className={s.link} onClick={() => {navigateToNews(); setIsMenuOpen(false);}}>{t('news')}</Nav.Link>
                            <Nav.Link className={s.link} onClick={() => {navigateToContacts(); setIsMenuOpen(false);}}>{t('contacts')}</Nav.Link>
                            <div className={s.langToggle}>
                            <span className={activeLang === 'ua' ? s.activeLang : s.notActiveLang}
                                  onClick={() => {handleChange('ua'); setIsMenuOpen(false);}}>UA</span>
                                <span className={activeLang === 'en' ? s.activeLang : s.notActiveLang}
                                      onClick={() => {handleChange('en'); setIsMenuOpen(false);}}>ENG</span>
                                <span className={activeLang === 'ru' ? s.activeLang : s.notActiveLang}
                                      onClick={() => {handleChange('ru'); setIsMenuOpen(false);}}>RU</span>
                            </div>
                            <SocialLinks/>
                        </Nav>
                    </Navbar.Collapse>
                    <div className={s.mediaWrapper}>
                        <CustomSelect/>
                    </div>
                    <div className={s.mediaWrapper}>
                        <CustomButton onClick={handleClick}>{t('signUp')}</CustomButton>
                    </div>
                </Container>

            </Navbar>
        </>
    );
};

export default TheHeader;


