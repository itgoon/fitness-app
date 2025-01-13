import { Navigate, useRoutes } from 'react-router-dom';
import { authRoutes } from './auth';
import { errorRoutes } from './error';
import { tabRoutes } from './tab';
import { stackRoutes } from './stack';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Auth routes
    ...authRoutes,

    // Tab routes
    ...tabRoutes,

    // Navi routers
    ...stackRoutes,

    // Error routes
    ...errorRoutes,

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
