import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <Link to={'/'}>Trang chủ</Link> |
      <Link to={'/movies'}>Danh sách phim</Link>|
    </nav>
  )
}

export default Navbar
