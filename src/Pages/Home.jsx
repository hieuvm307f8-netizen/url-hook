import { useAuth } from "../stores/authStore";

const Home = () => {
  const auth = useAuth((state) => state.user);
  console.log(auth);
  
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default Home
