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
                    style={{
                        '--swiper-navigation-color': '#E1251B',
                        '--swiper-pagination-color': '#E1251B',
                    }}
                    navigation={true}
                    // pagination={{clickable: true}}
                    scrollbar={{draggable: true}}
                    className="mySwiper"
                    lazy={true}
                >
                    {images.length > 0 && images.map((itemSrc) => (
                        <SwiperSlide key={itemSrc}>
                            <div className={s.imageWrapper}>
                                <img srcSet={`${itemSrc}?w=800&h=600&crop=fill&q=80 800w, ${itemSrc}?w=400&h=300&crop=fill&q=60 500w`} className={s.image}
                                     alt="event picture" loading="lazy" />
                                {/*<img src={itemSrc} className={s.image} loading="lazy" alt="event picture"/>*/}
                                {/*<img srcSet={`${itemSrc}?w=800&h=600&crop=fill&q=80 800w, ${itemSrc}?w=400&h=300&crop=fill&q=80 400w`}*/}
                                {/*    sizes="(max-width: 600px) 100vw, 50vw"*/}
                                {/*     className={s.image}*/}
                                {/*    alt="event picture"*/}
                                {/*    loading="lazy"*/}
                                {/*/>*/}
                                <div className="swiper-lazy-preloader swiper-lazy-preloader-red"></div>
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
