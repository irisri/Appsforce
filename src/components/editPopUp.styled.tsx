import styled from '@emotion/styled';
import { Typography, TextField } from '@mui/material';

import { COLORS } from '../utils/const';

export const RootDiv = styled.div`
  min-width: 350px;
  padding: 20px;
  @media (max-width: 600px) {
    min-width: 300px;
  }
`;

export const FormDiv = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const InfoDiv = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const SmallTextFiled = styled(TextField)`
  width: 100px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ButtonDiv = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
`;

export const ErrorMessage = styled(Typography)`
  color: ${COLORS.ERROR};
`;
