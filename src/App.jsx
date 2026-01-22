import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import MovieDetail from "./Pages/MovieDetail";
import FilterMovies from "./Pages/FilterMovies";
import MainLayout from "./Components/Layout/MainLayout";
import UserLayout from "./Pages/Users/UserLayout";
import Dashboard from "./Pages/Users/Dashboard";
import AuthMiddleware from "./Middleware/AuthMiddleware";
import Login from "./Pages/Login";
import Sales from "./Pages/Users/Sales";
import RoleMiddleware from "./Middleware/RoleMiddleware";
import Order from "./Pages/Users/Order";

function App() {
  return (
    <>
      {/* Đăng ký route */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies">
            <Route index element={<Movies />} />
            <Route path=":id" element={<MovieDetail />} />
          </Route>
          <Route path="/filter-movies" element={<FilterMovies />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* User */}
        <Route element={<AuthMiddleware />}>
          <Route element={<UserLayout />} path="/user">
            <Route index element={<Dashboard />} />
            <Route path="order/:productId" element={<Order />} />
            <Route element={<RoleMiddleware />}>
              <Route path="sales" element={<Sales />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}
export default App;
