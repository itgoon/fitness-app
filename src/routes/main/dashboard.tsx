import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loadingScreen';
import { AuthGuard } from '../components';
import Contract from '../../pages/Contract';

// ----------------------------------------------------------------------
// Dashboard
const DashboardPage = lazy(() => import('src/pages/dashboard'));
const SchedulePage = lazy(() => import('src/pages/schedule'));
const ScheduleCardDetail = lazy(() => import('src/pages/schedule/CardDetail'));

// Employee
const MyPagePage = lazy(() => import('src/pages/myPage'));
const ReservationPage = lazy(() => import('src/pages/reservation'));

// contract

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
        path: 'schedule',

        children: [
          { element: <SchedulePage />, index: true },
          { path: 'detail/:id', element: <ScheduleCardDetail /> }
        ]
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
