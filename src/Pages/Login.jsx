import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Login = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const continuePath = searchParams.get("continue") ?? "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email === 'admin@gmail.com' && password === '123456') {
        console.log(email, password);
        
        localStorage.setItem("isAuth", true);
        navigate(continuePath);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">email: </label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
