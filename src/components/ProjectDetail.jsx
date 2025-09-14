// src/components/ProjectDetail.jsx
import { useParams, Link } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();

  const projectData = {
    1: {
      title: "UI/UX Design",
      image: "/uiux.png",
      description: "Ini adalah detail lengkap tentang desain UI/UX yang modern.",
    },
    2: {
      title: "Web App",
      image: "/webapp.png",
      description: "Ini adalah detail lengkap tentang aplikasi web fullstack.",
    },
  };

  const project = projectData[id];

  if (!project) return <h2>Project tidak ditemukan</h2>;

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
      <Link to="/">← Kembali ke Projects</Link>
    </div>
  );
}
