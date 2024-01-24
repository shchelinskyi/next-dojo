import s from "./Loading.module.scss";
import loading from "@/assets/images/loading/loading.svg";
import Image from "next/image";
import cn from "classnames";

const Loading = () => {
    return (
        <div className={s.wrapper}>
            <Image src={loading} className={cn(s.loadingIcon, s.zoomOut)} alt="loading"/>
            <Image src={loading} className={cn(s.loadingIcon, s.zoomIn)}  alt="loading"/>
            <Image src={loading} className={cn(s.loadingIcon, s.zoomOut)}  alt="loading"/>
            <Image src={loading} className={cn(s.loadingIcon, s.zoomIn)}  alt="loading"/>
        </div>
    );
};

export default Loading;
