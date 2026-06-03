const alunos = [
  { id: 1, nome: "Ana", nota: 8.5 }
];

alunos.push({ id: 2, nome: "Bruno", nota: 7.0 });

console.log(alunos.find(a => a.id === 2));

console.log(alunos.filter(a => a.nota >= 7));

console.log(alunos.map(a => a.nome));

console.log(alunos.length);