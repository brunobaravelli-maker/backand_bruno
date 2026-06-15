const readline = require("readline-sync");

let tamanho = readline.questionInt("Digite o tamanho: ");
let tabuleiro = "";

for (let linha = 0; linha < tamanho; linha++) {
    for (let coluna = 0; coluna < tamanho; coluna++) {
        tabuleiro += (linha + coluna) % 2 === 0 ? " " : "#";
    }
    tabuleiro += "\n";
}

console.log(tabuleiro);