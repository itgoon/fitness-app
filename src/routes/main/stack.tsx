import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SplashScreen } from 'src/components/loadingScreen';
import AuthGuard from 'src/components/guard/AuthGuard';
import StackNaviLayout from 'src/layouts/stack';
import WorkoutCardDetail from '../../pages/schedule/detail/WorkoutCardDetail';
import ReservationCardDetail from '../../pages/schedule/detail';

// ----------------------------------------------------------------------

const RecordPostPage = lazy(() => import('src/pages/record/post'));
const ReservationPage = lazy(() => import('src/pages/reservation'));
const ContractMakePage = lazy(() => import('src/pages/contract/make/index'));
const ContractViewPage = lazy(() => import('src/pages/contract/view/index'));

// ----------------------------------------------------------------------

export const stackRoutes = [
  {
    element: (
      // <AuthGuard>
      <Suspense fallback={<SplashScreen />}>
        <StackNaviLayout>
          <Outlet />
        </StackNaviLayout>
      </Suspense>
      // </AuthGuard>
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
        children: [{ element: <ReservationPage /> }]
      },
      {
        path: 'contract',
        children: [{ element: <ContractMakePage />, index: true }]
      },
      {
        path: 'viewcontract',
        children: [{ element: <ContractViewPage />, index: true }]
      }
    ]
  }
];
