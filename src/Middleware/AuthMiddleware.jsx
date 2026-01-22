import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../stores/authStore";

const AuthMiddleware = () => {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const { pathname } = useLocation();
  
  if (!isAuthenticated) {
    return <Navigate to={`/login?continue=${pathname}`} replace />;
  }

  return <Outlet />;
};

export default AuthMiddleware;