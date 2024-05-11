import { ThemeProvider, createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import LightTheme from './theme/LightTheme';
import DarkTheme from './theme/DarkTheme';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { useEffect, useState } from 'react';

const App = () => {
  const themeModeLight = useSelector((state: RootState) => state.theme.value);
  const [currentTheme, setCurrentTheme] = useState(createTheme(LightTheme));

  useEffect(() => {
    setCurrentTheme(createTheme(themeModeLight ? LightTheme : DarkTheme));
  }, [themeModeLight]);

  return (
    <ThemeProvider theme={currentTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
