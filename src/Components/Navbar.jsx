import { Link } from "react-router-dom";
import { useAuth } from "../stores/authStore";

const links = [
  {
    id: 1,
    name: "Trang chủ",
    path: "/",
  },
  {
    id: 2,
    name: "Danh sách phim",
    path: "/movies",
  },
  {
    id: 3,
    name: "Trang chủ",
    path: "/filter-movies",
  },
];

const Navbar = () => {
  const auth = useAuth((state) => state.user);
  const updateUser = useAuth((state) => state.updateUser);  
  return (
    <nav>
      <h2>Hello, {auth.name}</h2>
      <button onClick={updateUser}>Login</button>
      <Link to={"/"}>Trang chủ</Link> |
      <Link to={"/movies"}>Danh sách phim</Link>|
      <Link to={"/filter-movies"}>Thể loại</Link>
    </nav>
  );
};

export default Navbar;
