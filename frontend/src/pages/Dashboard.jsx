import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Welcome to KK FUNDA</h2>
      <button onClick={() => navigate("/courses")}>View Courses</button>
    </div>
  );
}
