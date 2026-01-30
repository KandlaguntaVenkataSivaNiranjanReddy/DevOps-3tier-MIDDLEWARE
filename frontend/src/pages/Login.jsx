import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const login = async () => {
    const res = await axios.post("/auth/login", {
      email: "test@test.com",
      password: "123456"
    });
    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");
  };

  return (
    <div style={{ background: "#0f172a", height: "100vh", color: "white", padding: 40 }}>
      <h1>KK FUNDA – DevOps Training</h1>
      <button onClick={login}>Login</button>
    </div>
  );
}
