import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SplashScreen } from 'src/components/loadingScreen';
import AuthGuard from 'src/components/guard/AuthGuard';
import StackNaviLayout from 'src/layouts/stack';
import WorkoutCardDetail from '../../pages/schedule/workout/page';
import ReservationCardDetail from '../../pages/schedule/reservation/page';

// ----------------------------------------------------------------------

// 기록
const RecordPostPage = lazy(() => import('src/pages/record/new/page'));

// 예약
const ReservationPage = lazy(() => import('src/pages/reservation/page'));
const ReservationCheckPage = lazy(
  () => import('src/pages/reservation/check/page')
);

// 계약서
const ContractTermsPage = lazy(() => import('src/pages/contract/terms/page'));
const NewContractPage = lazy(() => import('src/pages/contract/new/page'));
const ContractViewPage = lazy(() => import('src/pages/contract/view/page'));

// ----------------------------------------------------------------------

export const stackRoutes = [
  {
    element: (
      <AuthGuard>
        <Suspense fallback={<SplashScreen />}>
          <StackNaviLayout>
            <Outlet />
          </StackNaviLayout>
        </Suspense>
      </AuthGuard>
    ),
    children: [
      {
        path: 'schedule',
        children: [
          { path: 'workout/:id', element: <WorkoutCardDetail /> },
          { path: 'reservation/:id', element: <ReservationCardDetail /> }
        ]
      },
      {
        path: 'record',
        children: [{ path: 'new', element: <RecordPostPage /> }]
      },
      {
        path: 'reservation',
        children: [
          { path: '', element: <ReservationPage /> },
          { path: 'check', element: <ReservationCheckPage /> }
        ]
      },
      {
        path: 'contract',
        children: [
          { path: 'terms', element: <ContractTermsPage /> },
          { path: 'new', element: <NewContractPage /> },
          { path: 'view', element: <ContractViewPage /> }
        ]
      }
    ]
  }
];
