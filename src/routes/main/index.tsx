import { Navigate, useRoutes } from 'react-router-dom';

import { authRoutes } from './auth';
import { dashboardRoutes } from './dashboard';
import { errorRoutes } from './main';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Auth routes
    ...authRoutes,

    // Main routes
    ...dashboardRoutes,
    // 홈 routes (헤더 O)
    // 일정 routes (헤더 X)
    // 기록 routes (헤더 O)
    // 더보기 routes (미정)

    // 헤더가 있는 라우터, 없는 라우터

    // Error routes
    ...errorRoutes,

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
