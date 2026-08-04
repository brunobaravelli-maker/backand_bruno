const express = require("express");
const app = express();

app.use(express.json());

// Banco de dados em memória
let alunos = [
  { id: 1, nome: "Ana", nota: 8.5 },
  { id: 2, nome: "Bruno", nota: 7.0 }
];

// Próximo ID
let proximoId = 3;

// GET - Listar todos
app.get("/alunos", (req, res) => {
  res.json(alunos);
});

// GET - Buscar por ID
app.get("/alunos/:id", (req, res) => {
  const id = Number(req.params.id);

  const aluno = alunos.find(a => a.id === id);

  if (!aluno) {
    return res.status(404).json({
      erro: "Aluno não encontrado"
    });
  }

  res.json(aluno);
});

// POST - Criar aluno
app.post("/alunos", (req, res) => {
  const novoAluno = {
    id: proximoId,
    nome: req.body.nome,
    nota: req.body.nota
  };

  alunos.push(novoAluno);
  proximoId++;

  res.status(201).json(novoAluno);
});

// PUT - Atualizar aluno
app.put("/alunos/:id", (req, res) => {
  const id = Number(req.params.id);

  const aluno = alunos.find(a => a.id === id);

  if (!aluno) {
    return res.status(404).json({
      erro: "Aluno não encontrado"
    });
  }

  aluno.nome = req.body.nome;
  aluno.nota = req.body.nota;

  res.json(aluno);
});

// DELETE - Remover aluno
app.delete("/alunos/:id", (req, res) => {
  const id = Number(req.params.id);

  const aluno = alunos.find(a => a.id === id);

  if (!aluno) {
    return res.status(404).json({
      erro: "Aluno não encontrado"
    });
  }

  alunos = alunos.filter(a => a.id !== id);

  res.json({
    mensagem: "Aluno removido com sucesso"
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});