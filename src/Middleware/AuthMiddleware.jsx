import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthMiddleware = () => {
  // const isLogin = true; // giả sử chưa đăng nhập
  // return isLogin ? <Outlet /> : <Navigate to="/login" />;
  const isAuth = localStorage.getItem("isAuth") ? true : false;
  const {pathname} = useLocation();
  console.log(pathname);
  
  return isAuth ? <Outlet/> : <Navigate to={`/login?continue=${pathname}`} replace />;

};
 
export default AuthMiddleware;
