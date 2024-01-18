import s from "./ChangeData.module.scss";
import Image from "next/image";
import loading from "../../assets/images/loading/loading.svg";
import cn from "classnames";

const ChangeData = () => {
    return (
        <div className={s.wrapper}>
            <Image src={loading} className={cn(s.loadingIcon, s.zoomOut)} alt="loading"/>
            <Image src={loading} className={cn(s.loadingIcon, s.zoomIn)} alt="loading"/>
            <Image src={loading} className={cn(s.loadingIcon, s.zoomOut)} alt="loading"/>
            <Image src={loading} className={cn(s.loadingIcon, s.zoomIn)} alt="loading"/>
        </div>
    );
};

export default ChangeData;
