import { lazy, Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { SplashScreen } from 'src/components/loadingScreen';
import AuthGuard from 'src/components/guard/AuthGuard';
import TabNaviLayout from 'src/layouts/tab';

// ----------------------------------------------------------------------

const HomePage = lazy(() => import('src/pages/home/page'));
const ScheduleListPage = lazy(() => import('src/pages/schedule/list/page'));
const RecordPage = lazy(() => import('src/pages/record/list/page'));
const MorePage = lazy(() => import('src/pages/more/page'));

// ----------------------------------------------------------------------

export const tabRoutes = [
  {
    element: (
      <AuthGuard>
        <Suspense fallback={<SplashScreen />}>
          <TabNaviLayout>
            <Outlet />
          </TabNaviLayout>
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
