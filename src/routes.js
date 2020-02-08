const express = require("express");

const cors = require("cors");

const routes = express.Router();

routes.use(cors());

const middleware = require("./controller/middleware");

const projetos = require("./data/projects");

routes.use(middleware);

routes.get("/projects", (req, res) => {
  return res.json(projetos);
});

routes.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projetos.push(project);
  res.json(project);
});

routes.post("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const projeto = projetos.find(project => project.id == id);
  projeto.tasks = title;
  return res.json(projeto);
});

routes.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const projeto = projetos.find(project => project.id == id);
  projeto.title = title;
  return res.json(projeto);
});

routes.delete("/projects/:id", (req, res) => {
  const { id } = req.params;
  for (let i in projetos) {
    if (projetos[i].id == id) {
      projetos.splice(i, 1);
    }
  }
  return res.json({ deleted: true });
});

module.exports = routes;
