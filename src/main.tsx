import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store.ts';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <App />
      </Provider>
    </StyledEngineProvider>
  </React.StrictMode>,
);
