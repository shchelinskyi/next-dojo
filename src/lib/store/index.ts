import {configureStore} from '@reduxjs/toolkit';
import formTrialSessionSlice from "./features/form/formTrialSessionSlice";
import cartSlice from "@/lib/store/features/cart/cartSlice";
import productSlice from "@/lib/store/features/product/productSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            formTrial: formTrialSessionSlice,
            cart: cartSlice,
            product: productSlice
        },
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']