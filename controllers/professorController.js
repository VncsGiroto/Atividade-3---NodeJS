let professores = [
  {
    id: "1",
    nome: "Prof. Carlos",
    idade: 40,
    departamento: "Matemática",
    turmas: [
      { codigo: "9A", disciplina: "MAT101", alunos: ["João", "Maria", "Pedro"] },
      { codigo: "10A", disciplina: "MAT201", alunos: ["Ana", "Luiz"] }
    ]
  },
  {
    id: "2",
    nome: "Prof. Ana",
    idade: 35,
    departamento: "História",
    turmas: [
      { codigo: "9A", disciplina: "HIS101", alunos: ["João", "Pedro"] },
      { codigo: "10B", disciplina: "HIS201", alunos: ["Maria", "Carlos", "Luiza"] }
    ]
  },
  {
    id: "3",
    nome: "Prof. João",
    idade: 50,
    departamento: "Ciências",
    turmas: [
      { codigo: "9A", disciplina: "CIE101", alunos: ["João", "Maria"] },
      { codigo: "9B", disciplina: "CIE101", alunos: ["Pedro", "Luiz"] }
    ]
  }
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
  if (departamento !== undefined) professores[index].departamento = departamento;
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
    alunos: Array.isArray(alunos) ? alunos : []
  };

  professor.turmas.push(novaTurma);

  return res.status(201).json(professor);
};

// Listar professores por departamento (GET /professores/departamento/:departamento)
const listarPorDepartamento = (req, res) => {
  const { departamento } = req.params;

  const resultado = professores.filter(
    (p) => p.departamento.toLowerCase() === departamento.toLowerCase()
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
    professor: professorRemovido
  });
};

module.exports = {
  listarTodos,
  buscarPorId,
  listarTurmas,
  atualizarProfessor,
  adicionarTurma,
  listarPorDepartamento,
  removerProfessor
};
