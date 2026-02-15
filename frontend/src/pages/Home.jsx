import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        <h1 style={styles.title}>KK FUNDA DevOps Training</h1>

        <p style={styles.subtitle}>
          Learn DevOps from industry experts with real-time projects
        </p>

        <div style={styles.section}>
          <h3 style={styles.heading}>Trainer Contact</h3>
          <p style={styles.text}>📞 +91 8639380177</p>
          <p style={styles.text}>📞 +91 9676831734</p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.heading}>Follow Us</h3>

          <p style={styles.linkRow}>
            ▶ YouTube :
            <a
              href="https://www.youtube.com/@kkfunda"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              @kkfunda
            </a>
          </p>

          <p style={styles.linkRow}>
            📸 Instagram :
            <a
              href="https://www.instagram.com/kk_funda_devops/"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              @kk_funda_devops
            </a>
          </p>
        </div>

        <button
          style={styles.button}
          onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
          onMouseLeave={e => e.target.style.transform = "scale(1)"}
          onClick={() => nav("/login")}
        >
          Student Login
        </button>

      </div>
    </div>
  );
}


const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
    fontFamily: "Segoe UI, sans-serif"
  },

  card: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "18px",
    width: "380px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
    transition: "0.3s"
  },

  title: {
    color: "#1a1a1a",
    marginBottom: "10px"
  },

  subtitle: {
    color: "#555",
    marginBottom: "25px",
    fontSize: "15px"
  },

  section: {
    marginBottom: "22px"
  },

  heading: {
    marginBottom: "10px",
    color: "#2c5364"
  },

  text: {
    margin: "5px 0",
    color: "#444",
    fontWeight: "500"
  },

  linkRow: {
    margin: "6px 0",
    color: "#444"
  },

  link: {
    marginLeft: "8px",
    color: "#2c5364",
    fontWeight: "bold",
    textDecoration: "none"
  },

  button: {
    marginTop: "20px",
    padding: "12px 25px",
    borderRadius: "30px",
    border: "none",
    background: "linear-gradient(135deg,#2c5364,#203a43)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s"
  }
};
