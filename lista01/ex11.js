const readline = require("readline-sync");

function podeVotar(idade) {
    return idade >= 16;
}

let idade = readline.questionInt("Digite sua idade: ");

console.log(podeVotar(idade) ? "Pode votar" : "Nao pode votar");