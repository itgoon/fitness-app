import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SplashScreen } from 'src/components/loadingScreen';
import AuthGuard from 'src/components/guard/AuthGuard';
import BottomTabNaviLayout from 'src/layouts/bottomTab';

// ----------------------------------------------------------------------

const HomePage = lazy(() => import('src/pages/home'));
const SchedulePage = lazy(() => import('src/pages/schedule'));
const RecordPage = lazy(() => import('src/pages/record'));
const MorePage = lazy(() => import('src/pages/more'));

// ----------------------------------------------------------------------

export const bottomTabRoutes = [
  {
    element: (
      // <AuthGuard>
      <Suspense fallback={<SplashScreen />}>
        <BottomTabNaviLayout>
          <Outlet />
        </BottomTabNaviLayout>
      </Suspense>
      // </AuthGuard>
    ),
    children: [
      {
        path: 'home',
        children: [{ element: <HomePage />, index: true }]
      },
      {
        path: 'schedule',
        children: [{ element: <SchedulePage />, index: true }]
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
