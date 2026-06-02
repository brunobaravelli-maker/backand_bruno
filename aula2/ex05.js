function executar(callback) {
    console.log("Processando...");
    callback();
}

executar(() => {
    console.log("Olá!");
});