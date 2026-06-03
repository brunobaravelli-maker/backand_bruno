const alunos = [
  { id: 1, nome: "Ana", nota: 8.5 },
  { id: 2, nome: "Bruno", nota: 7.0 },
  { id: 3, nome: "Carlos", nota: 9.2 }
];

for (let i = 0; i < alunos.length; i++) {
  console.log(`${alunos[i].nome}: ${alunos[i].nota}`);
}