import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { SplashScreen } from "src/components/loadingScreen";
import AuthLayout from "src/layouts/auth/auth";
import { GuestGuard } from "../components";

// ----------------------------------------------------------------------

const LoginPage = lazy(() => import("src/pages/auth/login"));
const RegisterPage = lazy(() => import("src/pages/auth/register"));
const ForgotPage = lazy(() => import("src/pages/auth/forgot"));

// ----------------------------------------------------------------------

export const authRoutes = [
  {
    element: (
      <GuestGuard>
        <AuthLayout>
          <Suspense fallback={<SplashScreen />}>
            <Outlet />
          </Suspense>
        </AuthLayout>
      </GuestGuard>
    ),
    children: [
      { path: "", element: <LoginPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "forgot", element: <ForgotPage /> }
    ]
  }
];
