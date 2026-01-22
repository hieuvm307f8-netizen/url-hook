import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { use, useEffect } from "react";

const MainLayout = () => {
  useEffect(() => {
  }, []);
  return (
    <div>
      <Navbar />
      <hr />
      <Outlet />
    </div>
  );
};

export default MainLayout;
