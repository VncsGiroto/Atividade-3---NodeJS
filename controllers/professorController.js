let professores = [
  {
    id: "1",
    nome: "Vinicius Giroto Francischinelli",
    idade: 40,
    departamento: "Desenvolvimento",
    turmas: [
      {
        codigo: "N2",
        disciplina: "Api",
        alunos: ["João", "Maria", "Pedro"],
      },
      { codigo: "N3", disciplina: "Web", alunos: ["Ana", "Luiz"] },
    ],
  },
  {
    id: "2",
    nome: "Arnaldo Ribeiro",
    idade: 35,
    departamento: "Engenharia",
    turmas: [
      { codigo: "N1", disciplina: "Calculo", alunos: ["João", "Pedro"] },
      {
        codigo: "N2",
        disciplina: "Fisica",
        alunos: ["Maria", "Carlos", "Luiza"],
      },
    ],
  },
];

// Listar todos os professores (GET /professores)
const listarTodos = (req, res) => {
  return res.status(200).json(professores);
};

// Buscar professor por ID (GET /professores/:id)
const buscarPorId = (req, res) => {
  const { id } = req.params;
  const professor = professores.find((p) => String(p.id) === String(id));

  if (!professor) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }

  return res.status(200).json(professor);
};

// Listar as turmas de um professor (GET /professores/:id/turmas)
const listarTurmas = (req, res) => {
  const { id } = req.params;
  const professor = professores.find((p) => String(p.id) === String(id));

  if (!professor) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }

  return res.status(200).json(professor.turmas);
};

// Atualizar os dados de um professor (PUT /professores/:id)
const atualizarProfessor = (req, res) => {
  const { id } = req.params;
  const { nome, idade, departamento, turmas } = req.body;

  const index = professores.findIndex((p) => String(p.id) === String(id));

  if (index === -1) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }

  if (nome !== undefined) professores[index].nome = nome;
  if (idade !== undefined) professores[index].idade = idade;
  if (departamento !== undefined)
    professores[index].departamento = departamento;
  if (turmas !== undefined) professores[index].turmas = turmas;

  return res.status(200).json(professores[index]);
};

// Adicionar uma turma a um professor (POST /professores/:id/turmas)
const adicionarTurma = (req, res) => {
  const { id } = req.params;
  const { codigo, disciplina, alunos } = req.body;

  const professor = professores.find((p) => String(p.id) === String(id));

  if (!professor) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }

  const novaTurma = {
    codigo,
    disciplina,
    alunos: Array.isArray(alunos) ? alunos : [],
  };

  professor.turmas.push(novaTurma);

  return res.status(201).json(professor);
};

// Listar professores por departamento (GET /professores/departamento/:departamento)
const listarPorDepartamento = (req, res) => {
  const { departamento } = req.params;

  const resultado = professores.filter(
    (p) => p.departamento.toLowerCase() === departamento.toLowerCase(),
  );

  return res.status(200).json(resultado);
};

// Remover um professor (DELETE /professores/:id)
const removerProfessor = (req, res) => {
  const { id } = req.params;
  const index = professores.findIndex((p) => String(p.id) === String(id));

  if (index === -1) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }

  const professorRemovido = professores.splice(index, 1)[0];

  return res.status(200).json({
    mensagem: "Professor removido com sucesso",
    professor: professorRemovido,
  });
};

module.exports = {
  listarTodos,
  buscarPorId,
  listarTurmas,
  atualizarProfessor,
  adicionarTurma,
  listarPorDepartamento,
  removerProfessor,
};
