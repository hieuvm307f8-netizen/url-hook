import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../stores/authStore";

const Navbar = () => {
  const { user, isAuthenticated, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <h2>Hello, {isAuthenticated ? user?.name : "Guest"}</h2>
      <Link to={"/"}>Trang chủ</Link> | 
      <Link to={"/movies"}> Danh sách phim</Link> | 
      
      {isAuthenticated ? (
        <button onClick={handleLogout} style={{ marginLeft: "10px" }}>Logout</button>
      ) : (
        <Link to="/login" style={{ marginLeft: "10px" }}>Login</Link>
      )}
    </nav>
  );
};

export default Navbar;