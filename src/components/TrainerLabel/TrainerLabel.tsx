import {FC} from 'react';
import line from "@/assets/images/team/line.png";
import Image from "next/image";
import cn from "classnames";
import s from "./TrainerLabel.module.scss";

type TrainerLabelProps = {
    name: string,
    rank: string,
    mainTrainer?: boolean

}

const TrainerLabel: FC<TrainerLabelProps> = ({name, rank, mainTrainer}) => {
    return (
        <div className={s.container}>
            <div className={cn(s.itemWrapper,{[s.mainTrainer]: mainTrainer})}>
                {mainTrainer &&
                    <a className={s.itemText} href="https://www.facebook.com/misakarzum" target="_blank">{name}</a>
                }
                {!mainTrainer &&
                    <p className={s.itemText}>{name}</p>
                }
                <Image className={s.lineIcon} src={line} alt="line"/>
                <p className={cn(s.itemText, s.hideText)}>{rank}</p>
            </div>
            <div className={s.rankWrapper}>
                {rank}
            </div>
        </div>
    );
};

export default TrainerLabel;
