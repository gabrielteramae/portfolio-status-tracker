const STACK_COLORS = {
  React: "#61dafb",
  Vite: "#a78bfa",
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Angular: "#dd0031",
  Python: "#3776ab",
  FastAPI: "#009688",
  "scikit-learn": "#f7931e",
  Tkinter: "#4b8bbe",
  HTML5: "#e34f26",
  CSS3: "#1572b6",
  "C#": "#239120",
  ".NET": "#512bd4",
  "ASP.NET Core": "#512bd4",
  Java: "#ed8b00",
  "Spring Boot": "#6db33f",
  MySQL: "#4479a1",
  Streamlit: "#ff4b4b",
  Pandas: "#150458",
};

export default function TechBadge({ name }) {
  const color = STACK_COLORS[name] || "#8b949e";
  return (
    <span className="tech-badge" style={{ "--badge-color": color }}>
      {name}
    </span>
  );
}
