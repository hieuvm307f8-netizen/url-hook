import { useParams, useSearchParams } from "react-router-dom";

// Mapping
const MOVIE_TYPES = {
  action: "Phim hành động",
  love: "Phim tình cảm",
  cartoon: "Phim hoạt hình",
};

const MovieDetail = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  // Đọc giá trị từ URL
  const type = searchParams.get("type") ?? "";
  const year = searchParams.get("year") ?? "";

  const handleFilter = (e) => {
    const value = e.target.value;
    if (value === "") {
      searchParams.delete("type");
    }
    setSearchParams({ type: value });
  };

  const handleChangeYear = (e) => {
    const value = e.target.value;
    if (value === "") {
      searchParams.delete("year");
    }
    setSearchParams({
      type: searchParams.get("type"),
      year: value,
    });
  };
  return (
    <div>
      <h1>Movie Detail {id}</h1>
      <h2>Danh mục phim: {MOVIE_TYPES[type] ?? "Chưa chọn"}</h2>
      <h2>Năm: {year}</h2>
      {/* <select name="" id="" onChange={handleFilter}>
        <option value="">---Chọn loại phim---</option>
        <option value="action">Phim hành động</option>
        <option value="love">Phim tình cảm</option>
        <option value="cartoon">Phim hoạt hình</option>
      </select> */}
      <select name="" id="" onChange={handleFilter}>
        <option value="">-- Chọn loại phim --</option>
        {Object.keys(MOVIE_TYPES).map((key) => (
          <option value={key} key={key}>
            {MOVIE_TYPES[key]}
          </option>
        ))}
      </select>

      <select name="" id="" onChange={handleChangeYear}>
        <option value="">---Chọn năm---</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
      </select>
    </div>
  );
};

export default MovieDetail;
