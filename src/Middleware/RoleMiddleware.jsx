import { Outlet } from "react-router-dom";

const RoleMiddleware = () => {
  const isPermission = true; // giả sử có quyền truy cập
  return <h1>{isPermission ? <Outlet /> : "Access Denied"}</h1>;
};

export default RoleMiddleware;
