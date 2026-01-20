import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import MovieDetail from "./Pages/MovieDetail";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/* Đăng ký route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies">
          <Route index element={<Movies />} />
          <Route path=":id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
