import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #ff0080, #7928ca)",
        minHeight: "100vh",
        padding: "1rem",
        color: "white",
      }}
    >
      <nav style={{ marginBottom: "2rem" }}>
        <a href="/" style={{ marginRight: "1rem" }}>
          Mohd >
        </a>
        <a href="/projects" style={{ marginRight: "1rem" }}>
          Projects
        </a>
        <a href="/resume" style={{ marginRight: "1rem" }}>
          Resume
        </a>
        <a href="/about" style={{ marginRight: "1rem" }}>
          About
        </a>
        <a href="/skills">Skills</a>
      </nav>
      <main style={{ textAlign: "center" }}>
        <h1>Mohd Shahid Iqbal</h1>
        <p>Passionate about changing the world with technology.</p>
        <div>
          <FaTwitter style={{ marginRight: "1rem" }} />
          <FaFacebookF style={{ marginRight: "1rem" }} />
          <FaLinkedinIn />
        </div>
        <button
          style={{
            marginTop: "2rem",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            color: "#7928ca",
            background: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          More about me
        </button>
      </main>
    </div>
  );
}
