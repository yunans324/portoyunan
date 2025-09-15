// src/components/Projects.jsx
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

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
          <Link to={`/projects/${p.id}`} style={cardStyle} key={p.id} title={p.title}>
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
            <p style={{ padding: "0 10px 8px", marginTop: "8px", fontSize: '0.85rem', lineHeight: 1.4 }}>
              {p.description}
            </p>
            {p.stack && (
              <ul style={{listStyle:'none',padding:'0 10px 16px',margin:0,display:'flex',gap:'6px',flexWrap:'wrap'}}>
                {p.stack.slice(0,3).map(tag => (
                  <li key={tag} style={{background:'#1f1f1f',border:'1px solid #262626',padding:'4px 8px',borderRadius:'999px',fontSize:'0.6rem',letterSpacing:'.5px'}}>{tag}</li>
                ))}
              </ul>
            )}
            {/* Spacer flex to push content if diperlukan */}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
