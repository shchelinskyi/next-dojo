import {FC} from "react";
import { Button } from 'react-bootstrap';
import s from './CustomNavbarToggle.module.scss';

type CustomNavbarToggleProps = {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}


const CustomNavbarToggle: FC<CustomNavbarToggleProps>  = ({isOpen, setIsOpen}) => {

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Button variant="outline-light" onClick={handleClick}
            className={`${s.customToggle} ${isOpen ? s.open : ''}`}
        >
            <span className={s.line}></span>
            <span className={s.line}></span>
            <span className={s.line}></span>
        </Button>
    );
};

export default CustomNavbarToggle;