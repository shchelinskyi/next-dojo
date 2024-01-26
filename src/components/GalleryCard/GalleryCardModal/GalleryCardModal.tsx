import {FC, useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import s from "./GalleryCardModal.module.scss";


type GalleryCardModalProps = {
    images: string[],
    onClose: () => void
}

const GalleryCardModal: FC<GalleryCardModalProps> = ({ images, onClose }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex:number) => {
        setIndex(selectedIndex);
    };



    return (
        <div className={s.overlay} onClick={onClose}>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <div className={s.closeBtn} onClick={onClose}>&times;</div>

                <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    slide={false}
                    indicators={false}
                    touch={true}
                >
                    {images.length > 0 && images.map((itemSrc, idx) => (
                        <Carousel.Item key={`${itemSrc}_${idx}`}>
                                <div className={s.imageWrapper}>
                                    <img
                                        src={itemSrc}
                                        className={s.image}
                                        alt="event photo"
                                        loading="lazy"
                                    />
                                </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default GalleryCardModal;
