import { styled } from '@mui/system';

const StyledBody = styled('div')`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
`;

const StyledLoginContainer = styled('div')`
  max-width: 400px;
  min-width: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

const StyledLoginButtonsContainer = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { StyledBody, StyledLoginContainer, StyledLoginButtonsContainer };
