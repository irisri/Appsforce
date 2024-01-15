import { useDispatch, useSelector } from 'react-redux';
import { Dialog, Typography } from '@mui/material';
import styled from '@emotion/styled';

import type { RootState, AppDispatch } from '../redux/store';
import { toggleConfirmationPopup } from '../redux/popupSlice';
import { setDeleteUser, deleteUser } from '../redux/usersSlice';

import { PopupActionButton } from './button.styled';
import { UserProps } from '../redux/user.interface';

const RootDiv = styled.div`
  padding: 20px;
`;

const ButtonDiv = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
`;

export const ConfirmationPopup = () => {
  const dispatch = useDispatch<AppDispatch>();

  const open = useSelector<RootState>((state) => state.popupStoe.isOpenConfirmationPopup) as boolean;
  const userToDelete = useSelector<RootState>((state) => state.usersStore.deleteUser) as UserProps;

  const onClose = (isConfirmed: boolean) => {
    if (isConfirmed) dispatch(deleteUser());

    dispatch(setDeleteUser(undefined));
    dispatch(toggleConfirmationPopup());
  };

  const userName = () => {
    if (!userToDelete) return;

    return `${userToDelete.name.first} ${userToDelete.name.last}`;
  };

  return (
    <Dialog open={open} onClose={() => onClose(false)}>
      <RootDiv>
        <Typography variant='body1'>Are you sure that you what to Delete user</Typography>
        <Typography variant='body1'>{userName()}?</Typography>

        <ButtonDiv>
          <PopupActionButton onClick={() => onClose(true)}>Confirm</PopupActionButton>
          <PopupActionButton onClick={() => onClose(false)}>Cancel</PopupActionButton>
        </ButtonDiv>
      </RootDiv>
    </Dialog>
  );
};
