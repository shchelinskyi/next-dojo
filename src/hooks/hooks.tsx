import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import type {RootState, AppDispatch} from '@/lib/store';


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;



const ScrollToTopOnMount = () => {
    const router = useRouter();

    const currentPath = router.asPath;

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [currentPath]);

    return <></>;
};

export default ScrollToTopOnMount;






