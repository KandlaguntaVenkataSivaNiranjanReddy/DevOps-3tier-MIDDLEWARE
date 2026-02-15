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
            ▶️ YouTube :
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
            🅾 Instagram :
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

        <button style={styles.button} onClick={() => nav("/login")}>
          Student Login
        </button>

      </div>
    </div>
  );
}
