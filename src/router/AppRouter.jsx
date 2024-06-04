import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar/pages/CalendarPage';
import { useAuthStore } from '../hooks';
import { useEffect } from 'react';

export const AppRouter = () => {
  const { checkAuthToken, status } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === 'checking') {
    return <h3>Cargando...</h3>;
  }

  const router = createBrowserRouter([
    {
      path: '/auth/*',
      element:
        status === 'not-authenticated' ? <LoginPage /> : <Navigate to="/" />,
    },
    {
      path: '/',
      element:
        status === 'authenticated' ? (
          <CalendarPage />
        ) : (
          <Navigate to="/auth/login" />
        ),
      children: [
        {
          path: '*',
          element: <Navigate to="/" />,
        },
      ],
    },
    {
      path: '*',
      element: (
        <Navigate to={status === 'not-authenticated' ? '/auth/login' : '/'} />
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
