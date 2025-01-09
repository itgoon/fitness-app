import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardLayout from 'src/layouts/dashboard';
import { LoadingScreen, SplashScreen } from 'src/components/loadingScreen';
import AuthGuard from 'src/components/guard/AuthGuard';
import WorkoutCardDetail from '../../pages/schedule/detail/WorkoutCardDetail';
import ReservationCardDetail from '../../pages/schedule/detail/ReservationCardDetail';
import CancelledReservation from '../../pages/schedule/detail/CancelledReservation';

// ----------------------------------------------------------------------
// Home
const HomePage = lazy(() => import('src/pages/home'));
const SchedulePage = lazy(() => import('src/pages/schedule'));
const MemberPage = lazy(() => import('src/pages/member'));
const RecordPage = lazy(() => import('src/pages/record'));
const RecordPostPage = lazy(() => import('src/pages/record/post'));
const MorePage = lazy(() => import('src/pages/more'));

// Employee
const MyPagePage = lazy(() => import('src/pages/myPage'));
const ReservationPage = lazy(() => import('src/pages/reservation'));

// contract
const ContractMakePage = lazy(() => import('src/pages/contract/make/index'));
const ContractViewPage = lazy(() => import('src/pages/contract/view/index'));
// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<SplashScreen />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),
    children: [
      {
        path: 'dashboard',
        children: [{ element: <HomePage />, index: true }]
      },
      {
        path: 'schedule',
        children: [
          { element: <SchedulePage />, index: true },
          { path: 'workout/:id', element: <WorkoutCardDetail /> },
          { path: 'reservation/:id', element: <ReservationCardDetail /> },
          {
            path: 'reservation/cancelled/:id',
            element: <CancelledReservation />
          }
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
        children: [{ element: <ContractMakePage />, index: true }]
      },
      {
        path: 'viewcontract',
        children: [{ element: <ContractViewPage />, index: true }]
      },
      {
        path: 'member',
        children: [{ element: <MemberPage />, index: true }]
      },
      {
        path: 'record',
        children: [
          { element: <RecordPage />, index: true },
          { path: 'post', element: <RecordPostPage /> }
        ]
      },
      {
        path: 'more',
        children: [{ element: <MorePage />, index: true }]
      }
    ]
  }
];
