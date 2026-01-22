import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { use, useEffect } from "react";
import { useAuth } from "../../stores/authStore";

const MainLayout = () => {
  const fetchTodos = useAuth((state) => state.fetchTodos);
  useEffect(() => {
    fetchTodos();
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
