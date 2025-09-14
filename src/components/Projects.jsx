// src/components/Projects.jsx
import { Link } from "react-router-dom";
import uiux from "../assets/uiux.png";

// Data project terpusat agar mudah dirawat
const projects = [
  {
    id: 1,
    title: "Project 1",
    image: uiux,
    description: "Sebuah project UI/UX yang saya buat untuk latihan desain dan prototyping.",
  },
  {
    id: 2,
    title: "Project 2",
    image: null,
    description: "Deskripsi singkat project kedua (masih kosong).",
  },
  {
    id: 3,
    title: "Project 3",
    image: null,
    description: "Deskripsi singkat project ketiga (masih kosong).",
  },
];

const cardStyle = {
  width: "300px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  background: "#111",
  color: "white",
  textDecoration: "none",
  display: "flex",
  flexDirection: "column",
  // Tinggi total seragam
  height: "380px",
};

const imageWrapperStyle = {
  width: "100%",
  height: "200px",
  background: "#222",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  color: "#888",
};

function Projects() {
  return (
    <section id="projects" className="projects" style={{ padding: "40px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px" }}>My Projects</h2>
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          justifyContent: "center",
          flexWrap: "nowrap", // paksa satu baris
          overflowX: "auto", // jika layar sempit, aktifkan scroll horizontal
          paddingBottom: "10px",
        }}
      >
        {projects.map((p) => (
          <Link to={`/projects/${p.id}`} style={cardStyle} key={p.id}>
            {p.image ? (
              <img
                src={p.image}
                alt={p.title}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
            ) : (
              <div style={imageWrapperStyle}>No Image</div>
            )}
            <h3 style={{ padding: "10px", margin: 0 }}>{p.title}</h3>
            <p style={{ padding: "0 10px 20px", marginTop: "8px" }}>{p.description}</p>
            {/* Spacer flex to push content if diperlukan */}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
