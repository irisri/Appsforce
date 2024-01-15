import styled from '@emotion/styled';
import { Typography } from '@mui/material';

import { COLORS } from '../utils/const';

export const RootDiv = styled.div`
  border-radius: 5px;
  border: 1px solid ${COLORS.GREY};
  padding: 10px 20px;
  color: ${COLORS.GREY};
  width: 380px;
  @media (max-width: 600px) {
    width: 320px;
    padding: 10px 15px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserName = styled(Typography)`
  margin-bottom: 10px;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Body = styled(Typography)`
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const AdressDiv = styled.div`
  margin-top: 5px;
`;
