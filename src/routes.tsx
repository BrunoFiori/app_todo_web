import { createBrowserRouter } from 'react-router-dom';
import Login from './Pages/Login/index.tsx';
import Home from './Pages/Home/index.tsx';

const router = createBrowserRouter([
  {
    path: '/Home',
    element: <Home />,
  },
  {
    path: '*',
    element: <Login />,
  },
  {
    path: '/',
    element: <Login />,
  },
]);

export default router;
