import {FC} from "react";
import {Navigation, Scrollbar} from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import s from "./GalleryCardModal.module.scss";

type GalleryCardModalProps = {
    images: string[],
    onClose: () => void
}


const GalleryCardModal: FC<GalleryCardModalProps> = ({images, onClose}) => {

    return (
        <div className={s.overlay} onClick={onClose}>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <div className={s.closeBtn} onClick={onClose}>&times;</div>
                <Swiper
                    modules={[Navigation, Scrollbar]}
                    navigation={true}
                    pagination={{clickable: true}}
                    scrollbar={{draggable: true}}
                    className="mySwiper"

                >
                    {images.length > 0 && images.map((itemSrc) => (
                        <SwiperSlide key={itemSrc}>
                            <div className={s.imageWrapper}>
                                <img src={itemSrc} className={s.image} alt="event picture"/>
                                {/*<img src={itemSrc} className={s.image} loading="lazy" alt="event picture"/>*/}
                            </div>
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default GalleryCardModal;
