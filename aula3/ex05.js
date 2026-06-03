const alunos = [
  { id: 1, nome: "Ana", nota: 8.5 },
  { id: 2, nome: "Bruno", nota: 7.0 }
];

app.get('/alunos', (req, res) => {
  res.json(alunos);
});

app.get('/alunos/:id', (req, res) => {
  const aluno = alunos.find(a => a.id === Number(req.params.id));
  res.json(aluno);
});