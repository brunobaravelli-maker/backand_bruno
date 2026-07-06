const express = require("express");
const app = express();

app.get("/status", (req, res) => {
    res.status(200).json({
        online: true,
        mensagem: "Servidor funcionando corretamente!"
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});