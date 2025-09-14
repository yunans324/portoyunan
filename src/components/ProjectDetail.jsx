// src/components/ProjectDetail.jsx
import { useParams, Link } from "react-router-dom";
import { getProjectById } from "../data/projects";
import { useEffect } from "react";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);

  useEffect(() => {
    document.title = project ? `${project.title} | Yunan` : 'Project Not Found | Yunan';
    return () => { document.title = 'Yunan Portfolio'; };
  }, [project]);

  if (!project) return <h2 style={{textAlign:'center', padding:'60px 20px'}}>Project tidak ditemukan</h2>;

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      {project.image ? (
        <img src={project.image} alt={project.title} />
      ) : (
        <div style={{width:'400px',height:'260px',background:'#222',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px',color:'#666',fontSize:'0.9rem'}}>
          No Image
        </div>
      )}
      <p style={{maxWidth:'640px',margin:'0 auto 20px', lineHeight:1.6}}>{project.description}</p>
      {project.stack && (
        <ul style={{listStyle:'none',padding:0,display:'flex',gap:'10px',justifyContent:'center',flexWrap:'wrap',margin:'0 0 30px'}}>
          {project.stack.map(s => <li key={s} style={{background:'#1f1f1f',border:'1px solid #262626',padding:'6px 12px',borderRadius:'999px',fontSize:'.7rem',letterSpacing:'.5px'}}>{s}</li>)}
        </ul>
      )}
      <Link to="/" style={{color:'var(--accent)'}}>← Kembali ke Projects</Link>
    </div>
  );
}
