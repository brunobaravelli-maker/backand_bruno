const express = require("express");
const app = express();

const produtos = [
    { id: 1, nome: "Mouse", preco: 80 },
    { id: 2, nome: "Teclado", preco: 120 },
    { id: 3, nome: "Monitor", preco: 900 },
    { id: 4, nome: "Fone de Ouvido", preco: 150 }
];

app.get("/produtos", (req, res) => {
    res.json(produtos);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});