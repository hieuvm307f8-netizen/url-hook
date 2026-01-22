import { useSearchParams } from "react-router-dom";

const MOVIES_TYPE = {
  action: "Phim hành động",
  horror: "Phim kinh dị",
  romance: "Phim tình cảm",
  comedy: "Phim hài hước",
};

const ALL_MOVIES = [
  { id: 1, title: "Avengers", type: "action", year: "2024" },
  { id: 2, title: "Notebook", type: "love", year: "2023" },
  { id: 3, title: "Doraemon", type: "cartoon", year: "2024" },
  { id: 4, title: "John Wick", type: "action", year: "2023" },
  { id: 5, title: "Conan", type: "cartoon", year: "2025" },
  { id: 6, title: "Cách em 1milimet", type: "love", year: "2025" },
];

const FilterMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "";
  const year = searchParams.get("year") || "";

  const handleChangeCategory = (e) => {
    const value = e.target.value;
    if (value === "") {
      searchParams.delete("category");
    } else {
      setSearchParams({ category: value });
    }
  };

  const handleChangeYear = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value === "") {
      searchParams.delete("year");
    } else {
      setSearchParams({ category: searchParams.get("category"), year: value });
    }
  };

  const filteredMovies = ALL_MOVIES.filter((movie) => {
    const mathType = !category || movie.type === category;
    const mathYear = !year || movie.year === year;
    return mathType && mathYear;
  });

  return (
    <div>
      <h1>Thể loại phim: {MOVIES_TYPE[category] || "Tất cả"}</h1>
      <p>Năm: {year || "Tất cả"}</p>
      <select name="" id="" onChange={handleChangeCategory}>
        <option value="">-- Chọn thể loại --</option>
        {Object.keys(MOVIES_TYPE).map((key) => (
          <option key={key} value={key}>
            {MOVIES_TYPE[key]}
          </option>
        ))}
      </select>

      <select name="" id="" onChange={handleChangeYear}>
        <option value="">-- Chọn năm --</option>
        <option value="2026">2026</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
      </select>

      <ul>
        {/* Hiển thị danh sách kết quả */}
        <ul>
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <li key={movie.id}>
                {movie.title} ({movie.year}) - {movie.type}
              </li>
            ))
          ) : (
            <p>Không tìm thấy phim nào phù hợp!</p>
          )}
        </ul>
      </ul>
    </div>
  );
};

export default FilterMovies;
