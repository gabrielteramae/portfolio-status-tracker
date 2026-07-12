const STATUS_CONFIG = {
  checking: { label: "Verificando...", className: "status-checking" },
  online: { label: "Online", className: "status-online" },
  offline: { label: "Offline", className: "status-offline" },
  "sem-deploy": { label: "Sem deploy público", className: "status-none" },
};

export default function StatusBadge({ status }) {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG["sem-deploy"];

  return (
    <span className={`status-badge ${config.className}`}>
      <span className="status-dot" />
      {config.label}
    </span>
  );
}
