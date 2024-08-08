import { Card, Switch } from '@mui/material';
import { styled } from '@mui/system';

const StyledBody = styled('div')`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

const StyledLoginContainer = styled(Card)`
  max-width: 400px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  gap: 16px;
`;

const StyledLoginTextInputContainer = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const StyledLoginButtonsContainer = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledSwitchThemeMode = styled(Switch)``;

export { StyledBody, StyledLoginContainer, StyledLoginButtonsContainer, StyledSwitchThemeMode, StyledLoginTextInputContainer };
