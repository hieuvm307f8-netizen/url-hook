import { Link, Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <h1>UserLayout Page</h1>
      <Link to={"/user"}>Dashboard</Link>
      <Link to={"#"}>Password</Link>
      <Link to={"#"}>My order</Link>
      <Link to={"#"}>Logout</Link>
      <hr />
      <Outlet />
    </div>
  );
};

export default UserLayout;
