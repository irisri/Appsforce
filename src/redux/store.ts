import { configureStore } from '@reduxjs/toolkit';

import usersReducer from './usersSlice';
import popupReducer from './popupSlice';

export const store = configureStore({
  reducer: {
    usersStore: usersReducer,
    popupStoe: popupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
