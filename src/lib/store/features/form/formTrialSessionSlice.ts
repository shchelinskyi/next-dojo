import {createSlice} from '@reduxjs/toolkit';

type FormState = {
    isOpenedForm: boolean;
    isOpenedSuccessModal: boolean;
}

const initialState: FormState = {
    isOpenedForm: false,
    isOpenedSuccessModal: false
};

const formTrialSessionSlice = createSlice({
    name: 'isFormTrialSession',
    initialState,
    reducers: {
        openForm: (state) => {
            document.documentElement.style.setProperty('overflow-y', 'hidden' );
            state.isOpenedForm = true;
        },
        closeForm: (state) => {
            state.isOpenedForm = false;
            document.documentElement.style.setProperty('overflow-y', 'auto');
        },
        openInfoModal: (state) => {
            document.documentElement.style.setProperty('overflow-y', 'hidden');
            state.isOpenedSuccessModal = true;
        },
        closeInfoModal: (state) => {
            state.isOpenedSuccessModal = false;
            document.documentElement.style.setProperty('overflow-y', 'auto', );
        },
    },
});

export const {
    openForm,
    closeForm,
    openInfoModal,
    closeInfoModal
} = formTrialSessionSlice.actions;

export default formTrialSessionSlice.reducer;