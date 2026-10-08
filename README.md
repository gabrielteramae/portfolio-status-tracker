# Portfolio Status Tracker — vitrine com checagem de URL

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Lista os projetos de `src/data/projects.js` (nome, descrição, stack, GitHub e URL ao vivo) e resume quantos estão no ar, offline ou sem deploy. A lista é estática; a checagem roda no navegador.

| Escolha | Motivo |
| --- | --- |
| `fetch` com `mode: "no-cors"` | Não há backend. O navegador só distingue conexão feita de falha, com timeout de 6 s. Um site no ar que bloqueia esse acesso pode cair como offline |

## Stack

- React 18.3, Vite 5 e CSS em `src/index.css`

## Estrutura

```
index.html
vite.config.js
package.json
src/main.jsx
src/App.jsx
src/index.css
src/data/projects.js
src/hooks/useProjectStatuses.js
src/components/ProjectCard.jsx
src/components/StatusBadge.jsx
src/components/TechBadge.jsx
```

## Como rodar

```bash
git clone https://github.com/gabrielteramae/portfolio-status-tracker.git
cd portfolio-status-tracker
npm install
npm run dev
```

Abra http://localhost:5173. `npm run build` gera `dist/`. Para incluir um projeto, edite o array em `src/data/projects.js` (`liveUrl: null` marca sem deploy).

---

© 2026 Gabriel Teramae Chan
