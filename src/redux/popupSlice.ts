import { createSlice } from '@reduxjs/toolkit';

import { UserProps } from './user.interface';

interface PopupState {
  openPopup: boolean;
  editUser: UserProps | undefined;
}

const initialState: PopupState = {
  openPopup: false,
  editUser: undefined,
};

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    closePopup: (state) => {
      state.editUser = undefined;
      state.openPopup = false;
    },
    openPopup: (state) => {
      state.openPopup = true;
    },
  },
});

export const { closePopup, openPopup } = popupSlice.actions;

export default popupSlice.reducer;
