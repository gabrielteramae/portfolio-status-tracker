import StatusBadge from "./StatusBadge";
import TechBadge from "./TechBadge";

export default function ProjectCard({ project, status, lastChecked, onRecheck }) {
  return (
    <article className="card">
      <div className="card-header">
        <h3>{project.name}</h3>
        <StatusBadge status={status} />
      </div>

      <p className="card-description">{project.description}</p>

      <div className="tech-row">
        {project.stack.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>

      <div className="card-footer">
        <div className="card-links">
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Ver ao vivo
            </a>
          )}
        </div>

        {project.liveUrl && (
          <button className="recheck-btn" onClick={onRecheck} disabled={status === "checking"}>
            {status === "checking" ? "..." : "Verificar de novo"}
          </button>
        )}
      </div>

      {lastChecked && (
        <p className="last-checked">
          Verificado às {lastChecked.toLocaleTimeString("pt-BR")}
        </p>
      )}
    </article>
  );
}
