import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserProps } from './user.interface';

interface UserState {
  value: number;
  users: UserProps[];
  editUser: UserProps | undefined;
  isNewUser: boolean;
  deleteUser: UserProps | undefined;
}

const initialState: UserState = {
  value: 0,
  users: [],
  editUser: undefined,
  isNewUser: false,
  deleteUser: undefined,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<UserProps[]>) => {
      state.users = action.payload;
    },
    deleteUser: (state) => {
      state.users = state.users.filter((user) => user.login.uuid !== state.deleteUser?.login.uuid);
    },
    setIsNewUser: (state, action: PayloadAction<boolean>) => {
      state.isNewUser = action.payload;
    },
    saveUser: (state, action: PayloadAction<UserProps>) => {
      const newUser = action.payload;

      if (state.isNewUser) {
        state.isNewUser = false;
        state.users = [...state.users, newUser];
      } else {
        state.users = state.users.map((user) => {
          if (user.login.uuid === newUser.login.uuid) return newUser;
          return user;
        });
      }

      state.editUser = undefined;
    },
    setEditUser: (state, action: PayloadAction<UserProps | undefined>) => {
      state.editUser = action.payload;
    },
    setDeleteUser: (state, action: PayloadAction<UserProps | undefined>) => {
      state.deleteUser = action.payload;
    },
  },
});

export const { setUsers, deleteUser, saveUser, setIsNewUser, setEditUser, setDeleteUser } = usersSlice.actions;

export default usersSlice.reducer;
