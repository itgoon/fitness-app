import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SplashScreen } from 'src/components/loadingScreen';
import AuthGuard from 'src/components/guard/AuthGuard';
import StackNaviLayout from 'src/layouts/stack';

// ----------------------------------------------------------------------

// 일정
const WorkoutCardDetail = lazy(() => import('src/pages/schedule/workout/page'));
const ReservationCardDetail = lazy(
  () => import('src/pages/schedule/reservation/page')
);

// 기록
const RecordPostPage = lazy(() => import('src/pages/record/new/page'));

// 예약
const ReservationPage = lazy(() => import('src/pages/reservation/list/page'));
const ReservationCheckPage = lazy(
  () => import('src/pages/reservation/check/page')
);
const ReservationSuccessPage = lazy(
  () => import('src/pages/reservation/success/page')
);

// 계약서
const ContractTermsPage = lazy(() => import('src/pages/contract/terms/page'));
const NewContractPage = lazy(() => import('src/pages/contract/new/page'));
const ContractViewPage = lazy(() => import('src/pages/contract/view/page'));
const ContractSuccessPage = lazy(
  () => import('src/pages/contract/success/page')
);

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
          { path: 'check', element: <ReservationCheckPage /> },
          { path: 'success', element: <ReservationSuccessPage /> }
        ]
      },
      {
        path: 'contract',
        children: [
          { path: 'terms', element: <ContractTermsPage /> },
          { path: 'new', element: <NewContractPage /> },
          { path: 'view', element: <ContractViewPage /> },
          { path: 'success', element: <ContractSuccessPage /> }
        ]
      }
    ]
  }
];
