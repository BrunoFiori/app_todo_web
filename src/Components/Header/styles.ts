import { styled } from '@mui/system';
import { AppBar, Box, Button } from '@mui/material';

const StyledHeader = styled(AppBar)`
  width: 100%;
  text-align: center;
  padding: 2rem 0;
  display: flex;
  justify-content: space-around;
`;

const StyledGroupMenuButtons = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledMenuButton = styled(Button)``;

export { StyledHeader, StyledMenuButton, StyledGroupMenuButtons };
