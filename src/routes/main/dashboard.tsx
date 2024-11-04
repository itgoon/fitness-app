import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loadingScreen';
import { AuthGuard } from '../components';

// ----------------------------------------------------------------------
// Dashboard
const DashboardPage = lazy(() => import('src/pages/dashboard'));
const SchedulePage = lazy(() => import('src/pages/schedule'));
const ScheduleCardDetail = lazy(() => import('src/pages/schedule/CardDetail'));
const ContractPage = lazy(() => import('src/pages/Contract'));
const MemberPage = lazy(() => import('src/pages/member'));
const RecordPage = lazy(() => import('src/pages/record'));
const MorePage = lazy(() => import('src/pages/more'));

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
        children: [{ element: <ContractPage />, index: true }]
      },
      {
        path: 'member',
        children: [{ element: <MemberPage />, index: true }]
      },
      {
        path: 'record',
        children: [{ element: <RecordPage />, index: true }]
      },
      {
        path: 'more',
        children: [{ element: <MorePage />, index: true }]
      }
    ]
  }
];
