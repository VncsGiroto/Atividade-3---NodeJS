const express = require("express");
const router = express.Router();
const professorController = require("../controllers/professorController");

// Listar todos os professores
router.get("/", professorController.listarTodos);

// Listar professores por departamento (declarada antes de /:id para evitar conflito de rota)
router.get("/departamento/:departamento", professorController.listarPorDepartamento);

// Buscar professor por ID
router.get("/:id", professorController.buscarPorId);

// Listar as turmas de um professor
router.get("/:id/turmas", professorController.listarTurmas);

// Atualizar os dados de um professor
router.put("/:id", professorController.atualizarProfessor);

// Adicionar uma turma a um professor
router.post("/:id/turmas", professorController.adicionarTurma);

// Remover um professor
router.delete("/:id", professorController.removerProfessor);

module.exports = router;
