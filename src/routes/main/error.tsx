import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SplashScreen } from 'src/components/loadingScreen';
import ErrorLayout from 'src/layouts/error/layout';

// ----------------------------------------------------------------------

const Page500 = lazy(() => import('src/pages/error/500'));
const Page403 = lazy(() => import('src/pages/error/403'));
const Page404 = lazy(() => import('src/pages/error/404'));

// ----------------------------------------------------------------------

export const errorRoutes = [
  {
    element: (
      <Suspense fallback={<SplashScreen />}>
        <ErrorLayout>
          <Outlet />
        </ErrorLayout>
      </Suspense>
    ),
    children: [
      { path: '500', element: <Page500 /> },
      { path: '404', element: <Page404 /> },
      { path: '403', element: <Page403 /> }
    ]
  }
];
