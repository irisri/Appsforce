import { useDispatch } from 'react-redux';
import { Avatar } from '@mui/material';

import type { AppDispatch } from '../redux/store';
import { UserProps } from '../redux/user.interface';
import { toggleConfirmationPopup, toggleEditOpoup } from '../redux/popupSlice';
import { setEditUser, setDeleteUser } from '../redux/usersSlice';

import { UserCardActionButton } from './button.styled';
import { RootDiv, UserInfo, ButtonDiv, UserName, Body, AdressDiv } from './userCard.styled';

interface UserCardProps {
  user: UserProps;
}

export const UserCard = ({ user }: UserCardProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const onEdit = () => {
    dispatch(setEditUser(user));
    dispatch(toggleEditOpoup());
  };

  const onDelete = () => {
    dispatch(setDeleteUser(user));
    dispatch(toggleConfirmationPopup());
  };

  return (
    <RootDiv>
      <UserInfo>
        <div>
          <UserName variant='h6'>{`${user.name.title} ${user.name.first} ${user.name.last}`}</UserName>

          <Body variant='body1'>email: {user.email}</Body>
          <AdressDiv>
            <Body variant='body1'>country: {user.location.country}</Body>
            <Body variant='body1'>city: {user.location.city}</Body>
            <Body variant='body1'>
              street: {user.location.street.name}, {user.location.street.number}
            </Body>
          </AdressDiv>
        </div>
        <div>
          <Avatar alt={`${user.name.first} ${user.name.last}`} src={user.picture.medium} />
        </div>
      </UserInfo>
      <ButtonDiv>
        <UserCardActionButton onClick={onEdit}>Edit</UserCardActionButton>
        <UserCardActionButton onClick={onDelete}>delete</UserCardActionButton>
      </ButtonDiv>
    </RootDiv>
  );
};
