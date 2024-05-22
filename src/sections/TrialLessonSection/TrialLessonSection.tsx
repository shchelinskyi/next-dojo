import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import Image from "next/image";
import girl from '@/assets/images/trial/girl.png';
import boy from '@/assets/images/trial/boy.png';
import cloudLeft from '@/assets/images/trial/cloud-trial-left.svg';
import cloudRT from '@/assets/images/trial/cloud-trial-rt.svg';
import cloudRB from '@/assets/images/trial/cloud-trial-rb.svg';
import {useAppDispatch} from "@/lib/hooks";
import {openForm} from "@/lib/store/features/form/formTrialSessionSlice";
import cn from "classnames";
import {gagalinFont} from "@/fonts";
import s from './TrialLessonSection.module.scss';

interface Position {
    x: number;
    y: number;
}

const TrialLessonSection = () => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation();
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            requestAnimationFrame(() => {
                setMousePosition({x: e.clientX, y: e.clientY});
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const calculateParallax = (position: Position, strength: number): { transform: string } => ({
        transform: `translateX(${position.x / strength}px)`,
    });

    return (
            <div className={s.container}>
                <div className={s.block}>
                    <Image className={s.girlImg} src={girl} style={calculateParallax(mousePosition, 50)} alt="karate girl"/>
                    <div className={s.centerItem}>
                        <div className={s.titleBlockS}>
                            <h5 className={cn(s.centerItemTitle, gagalinFont.className)}>
                                {t('freeS1')} <br/> {t('freeS2')} <span className={s.itemLabel}>{t('freeTask')}</span>
                            </h5>
                        </div>
                        <div className={s.titleBlockML}>
                            <h5 className={cn(s.centerItemTitle, gagalinFont.className)}>
                                {t('free')} <br/> <span className={s.itemLabel}>{t('freeTask')}</span>
                            </h5>
                        </div>
                        <p className={s.centerItemDescription}>
                            {t('freeSlogan1')} <br/> {t('freeSlogan2')}
                        </p>
                        <div className={s.btnBlock}>
                            <button onClick={() => dispatch(openForm())}  className={s.customButton}>{t('signUpforClasses')}</button>
                        </div>



                        <Image className={s.cloudLeftImg} src={cloudLeft} alt="cloud"/>
                        <Image className={s.cloudRightTopImg} src={cloudRT} alt="cloud"/>
                        <Image className={s.cloudRightBottomImg} src={cloudRB} alt="cloud"/>
                    </div>
                    <Image className={s.boyImg} src={boy} style={calculateParallax(mousePosition, -50)}
                           alt="karate boy"/>
                </div>
            </div>
    );
};

export default TrialLessonSection;
