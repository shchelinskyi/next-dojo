'use client'
import { useRef, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/lib/store';

interface StoreProviderProps {
    children: ReactNode;
}


const StoreProvider = ({ children }: StoreProviderProps) => {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
        storeRef.current = makeStore()
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}

export default StoreProvider;