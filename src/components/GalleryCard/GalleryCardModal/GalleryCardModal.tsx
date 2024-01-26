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
                                {/*<img src={`${itemSrc}?w=800&h=600&crop=fill&q=80`} className={s.image}*/}
                                {/*     alt="event picture" loading="lazy"/>*/}
                                {/*<img src={itemSrc} className={s.image} loading="lazy" alt="event picture"/>*/}
                                <img srcSet={`${itemSrc}?w=800&h=600&crop=fill&q=80 800w, ${itemSrc}?w=400&h=300&crop=fill&q=80 400w`}
                                    sizes="(max-width: 600px) 100vw, 50vw"
                                     className={s.image}
                                    alt="event picture"
                                    loading="lazy"
                                />
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
