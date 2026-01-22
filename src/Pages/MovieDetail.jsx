import { useNavigate, useParams } from "react-router-dom";

function MovieDetail() {
  const {id} = useParams();
  const navigate = useNavigate();
  return <>
      <h1>Movie Detail {id}</h1>
      <button onClick={() => navigate(`/user/order/${id}`)}>Mua phim</button>
    </>;
}

export default MovieDetail;
