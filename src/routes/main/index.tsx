import { Navigate, useRoutes } from "react-router-dom";

import { authRoutes } from "./auth";
import { dashboardRoutes } from "./dashboard";
import { mainRoutes } from "./main";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Main routes
    ...mainRoutes,

    // Auth routes
    ...authRoutes,

    // dashboardRoutes routes
    ...dashboardRoutes,

    // No match 404
    { path: "*", element: <Navigate to="/404" replace /> }
  ]);
}
