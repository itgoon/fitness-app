import AuthProvider from "@/provider/AuthProvider";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";

import * as Pg from "@/pages";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Pg.LoginPage />} />
        <Route path="/oauth" element={<Pg.LoginAuthPage />} />

        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              element={<route.element />}
              key={route.name}
            >
              {route.children?.map((r) => {
                return <Route path={r.path} element={<r.element />} />;
              })}
            </Route>
          );
        })}
      </Routes>
    </AuthProvider>
  );
};

export default AppRoutes;
