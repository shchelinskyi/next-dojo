import s from "./Ticker.module.scss";
import cn from "classnames";
import {gagalinFont} from "@/fonts/fonts";

const Ticker = () => {
    return (
        <div className={s.wrapper}>
            <div className={cn(s.tickerText, gagalinFont.className)}>
                &middot; Misak Dojo &middot; Misak Dojo &middot; Misak Dojo &middot; Misak Dojo &middot; Misak Dojo &middot; Misak Dojo &middot; Misak Dojo &middot; Misak Dojo &middot; Misak Dojo &middot; Misak Dojo &middot; Misak Dojo &middot; Misak Dojo&middot; Misak Dojo &middot; Misak Dojo &middot; Misak Dojo &middot; Misak Dojo&middot; Misak Dojo &middot; Misak Dojo &middot; Misak Dojo &middot; Misak Dojo&middot; Misak Dojo &middot; Misak Dojo &middot; Misak Dojo &middot; Misak Dojo&middot; Misak Dojo &middot; Misak Dojo &middot; Misak Dojo &middot; Misak Dojo&middot; Misak Dojo &middot; Misak Dojo &middot; Misak Dojo &middot; Misak Dojo
            </div>

        </div>
    );
};

export default Ticker;
