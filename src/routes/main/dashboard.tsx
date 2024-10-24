import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loadingScreen';
import { AuthGuard } from '../components';

// ----------------------------------------------------------------------
// Dashboard
const DashboardPage = lazy(() => import('src/pages/dashboard'));

// Employee
const MyPagePage = lazy(() => import('src/pages/myPage'));
const ReservationPage = lazy(() => import('src/pages/reservation'));

// contract
const Contract = lazy(() => import('src/pages/contract'));

// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),
    children: [
      {
        path: 'dashboard',

        children: [{ element: <DashboardPage />, index: true }]
      },
      {
        path: 'reservation',

        children: [{ element: <ReservationPage />, index: true }]
      },
      {
        path: 'myPage',

        children: [{ element: <MyPagePage />, index: true }]
      },
      {
        path: 'contract',
        children: [{ element: <Contract />, index: true }]
      }
    ]
  }
];
