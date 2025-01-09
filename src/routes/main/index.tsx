import { Navigate, useRoutes } from 'react-router-dom';

import { authRoutes } from './auth';
import { dashboardRoutes } from './dashboard';
import { errorRoutes } from './error';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Auth routes
    ...authRoutes,

    // Main routes
    ...dashboardRoutes,

    // Error routes
    ...errorRoutes,

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
