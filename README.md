# Portfolio Status Tracker
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite&logoColor=white)

Vitrine dos meus projetos, com checagem em tempo real se cada um está no ar.

## Sobre

Um painel que lista os projetos que venho construindo, com stack utilizada, links pro GitHub e pro deploy (quando existe), e um indicador de status ao vivo — verifica se cada URL responde direto do navegador, sem precisar de backend.

## Funcionalidades

- **Cards de projeto**: nome, descrição, badges de tecnologia coloridos por linguagem/framework
- **Checagem de status em tempo real**: usa `fetch` com `mode: "no-cors"` pra detectar se um site está no ar, sem precisar de servidor próprio
- **Barra de resumo**: total de projetos, quantos estão no ar, offline ou sem deploy público
- **Botão de reverificação**, individual por projeto ou geral

## Como funciona a checagem de status

Como é tudo client-side (sem backend), a checagem usa uma requisição `no-cors`: o navegador tenta se conectar à URL e, mesmo sem conseguir ler a resposta (por causa de CORS), consegue saber se a conexão foi bem-sucedida ou falhou. Isso é suficiente pra distinguir "site no ar" de "site fora do ar", mas não informa o código de status HTTP exato.

## Stack

- React 18 + Vite
- Hooks personalizados para orquestrar as checagens
- CSS puro, sem bibliotecas de UI

---

## Como rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

Gera a pasta `dist/`, pronta pra hospedar em qualquer serviço estático.

## Atualizando a lista de projetos

Os projetos ficam em `src/data/projects.js`. Pra adicionar um novo, é só incluir um objeto novo no array com `name`, `description`, `stack`, `githubUrl` e `liveUrl` (ou `null` se ainda não tiver deploy).
