import axios from "../api/axios";

export default function Register() {
  const register = async () => {
    await axios.post("/auth/register", {
      name: "Test User",
      email: "test@test.com",
      password: "123456"
    });
    alert("Registered");
  };

  return <button onClick={register}>Register</button>;
}
