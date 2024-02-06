import {FC} from 'react';
import line from "@/assets/images/team/line.png";
import Image from "next/image";
import Link from "next/link";
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
                    <Link className={cn(s.itemText, s.linkText)} href="https://facebook.com/misakarzum" target="_blank">{name}</Link>
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
