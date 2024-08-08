import { ThemeOptions } from '@mui/material/styles';

const LightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        color: 'primary',
      },
    },
  },
  direction: 'ltr',
};

export default LightTheme;
