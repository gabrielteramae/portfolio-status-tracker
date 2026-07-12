import { PROJECTS } from "./data/projects";
import { useProjectStatuses } from "./hooks/useProjectStatuses";
import ProjectCard from "./components/ProjectCard";

export default function App() {
  const { statuses, checkOne, checkAll } = useProjectStatuses(PROJECTS);

  const values = Object.values(statuses);
  const onlineCount = values.filter((s) => s.status === "online").length;
  const offlineCount = values.filter((s) => s.status === "offline").length;
  const noDeployCount = values.filter((s) => s.status === "sem-deploy").length;
  const checkingCount = values.filter((s) => s.status === "checking").length;

  return (
    <div className="app">
      <header className="app-header">
        <p className="eyebrow">Gabriel Teramae Chan</p>
        <h1>Meus Projetos</h1>
        <p className="tagline">
          Vitrine dos projetos que venho construindo, com checagem em tempo real de quais
          estão no ar.
        </p>
      </header>

      <div className="summary-bar">
        <div className="summary-item">
          <span className="summary-value">{PROJECTS.length}</span>
          <span className="summary-label">projetos</span>
        </div>
        <div className="summary-item">
          <span className="summary-value summary-online">{onlineCount}</span>
          <span className="summary-label">no ar</span>
        </div>
        <div className="summary-item">
          <span className="summary-value summary-offline">{offlineCount}</span>
          <span className="summary-label">offline</span>
        </div>
        <div className="summary-item">
          <span className="summary-value summary-muted">{noDeployCount}</span>
          <span className="summary-label">sem deploy</span>
        </div>
        <button className="recheck-all-btn" onClick={checkAll} disabled={checkingCount > 0}>
          {checkingCount > 0 ? "Verificando..." : "Verificar tudo de novo"}
        </button>
      </div>

      <main className="grid">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            status={statuses[project.id]?.status}
            lastChecked={statuses[project.id]?.lastChecked}
            onRecheck={() => checkOne(project)}
          />
        ))}
      </main>

      <footer className="app-footer">
        <p>
          A checagem de status usa uma requisição direta do navegador; sites que bloqueiam
          esse tipo de acesso podem aparecer como offline mesmo estando no ar.
        </p>
      </footer>
    </div>
  );
}
