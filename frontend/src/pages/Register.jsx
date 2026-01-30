import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = async () => {
    try {
      await axios.post("/auth/register", { name, email, password });
      alert("Registered successfully");
      navigate("/");
    } catch (err) {
      alert("Register failed");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>KK FUNDA – Signup</h2>

      <input
        placeholder="Name"
        onChange={e => setName(e.target.value)}
      /><br /><br />

      <input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      /><br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      /><br /><br />

      <button onClick={register}>Signup</button>
    </div>
  );
}
