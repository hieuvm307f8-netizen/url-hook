import { useParams } from "react-router-dom";
import { useAuth } from "../stores/authStore";

const Movies = () => {
  const logout = useAuth((state) => state.logOut);
  return (
    <div>
      <h1>Movies</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Movies;
