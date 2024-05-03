import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import AuthProvider from "@/provider/AuthProvider";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* <Route path="/login" element={<Pg.LoginPage />} /> */}

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
