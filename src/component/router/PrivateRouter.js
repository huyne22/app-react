import { Route, Navigate } from "react-router-dom";

const PrivateRouter = ({ element: Component, path }) => {
  if (isLoggedIn()) {
    return <Route path={path} element={<Component />} />;
  } else {
    return <Navigate to="/login" />;
  }
};
export default PrivateRouter;
