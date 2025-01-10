import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import GuestGuard from 'src/components/guard/GuestGuard';
import { SplashScreen } from 'src/components/loadingScreen';
import AuthLayout from 'src/layouts/auth/auth';

// ----------------------------------------------------------------------

const LoginPage = lazy(() => import('src/pages/auth/login'));
const RegisterPage = lazy(() => import('src/pages/auth/register'));
const ForgotPage = lazy(() => import('src/pages/auth/forgot'));

// ----------------------------------------------------------------------

export const authRoutes = [
  {
    element: (
      <GuestGuard>
        <Suspense fallback={<SplashScreen />}>
          <AuthLayout>
            <Outlet />
          </AuthLayout>
        </Suspense>
      </GuestGuard>
    ),
    children: [
      { path: '', element: <LoginPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'forgot', element: <ForgotPage /> }
    ]
  }
];
