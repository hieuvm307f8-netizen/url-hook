import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../stores/authStore";

const Login = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const login = useAuth((state) => state.login); // Lấy hàm login từ store

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const continuePath = searchParams.get("continue") ?? "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const authRes = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!authRes.ok) throw new Error("Email hoặc mật khẩu không đúng!");
      const { access_token } = await authRes.json();

      const profileRes = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
        headers: { Authorization: `Bearer ${access_token}` },
      });
      const userData = await profileRes.json();

      login(userData, access_token);
      
      navigate(continuePath);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;