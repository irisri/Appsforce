import { createSlice } from '@reduxjs/toolkit';

interface PopupState {
  isOpenEditPopup: boolean;
  isOpenConfirmationPopup: boolean;
}

const initialState: PopupState = {
  isOpenEditPopup: false,
  isOpenConfirmationPopup: false,
};

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    toggleEditOpoup: (state) => {
      state.isOpenEditPopup = !state.isOpenEditPopup;
    },
    toggleConfirmationPopup: (state) => {
      state.isOpenConfirmationPopup = !state.isOpenConfirmationPopup;
    },
  },
});

export const { toggleEditOpoup, toggleConfirmationPopup } = popupSlice.actions;

export default popupSlice.reducer;
