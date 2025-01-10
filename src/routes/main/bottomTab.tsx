import { lazy, Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { SplashScreen } from 'src/components/loadingScreen';
import AuthGuard from 'src/components/guard/AuthGuard';
import BottomTabNaviLayout from 'src/layouts/bottomTab';

// ----------------------------------------------------------------------

const HomePage = lazy(() => import('src/pages/home/page'));
const ScheduleListPage = lazy(() => import('src/pages/schedule/list/page'));
const RecordPage = lazy(() => import('src/pages/record/page'));
const MorePage = lazy(() => import('src/pages/more/page'));

// ----------------------------------------------------------------------

export const bottomTabRoutes = [
  {
    element: (
      <AuthGuard>
        <Suspense fallback={<SplashScreen />}>
          <BottomTabNaviLayout>
            <Outlet />
          </BottomTabNaviLayout>
        </Suspense>
      </AuthGuard>
    ),
    children: [
      {
        path: 'home',
        children: [{ element: <HomePage />, index: true }]
      },
      {
        path: 'schedule',
        children: [
          { element: <Navigate to="list" replace />, index: true },
          { path: 'list', element: <ScheduleListPage /> }
        ]
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
