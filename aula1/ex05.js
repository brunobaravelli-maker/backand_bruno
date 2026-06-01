const input = require('readline-sync');

let nota = Number(input.question("Digite a nota: "));

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}