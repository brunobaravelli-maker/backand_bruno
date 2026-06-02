const appNome = "Sistema Escolar";

function calcular() {
    const resultado = 42;
    console.log(resultado); // escopo local
    console.log(appNome);   // acessa variável global
}

calcular();
console.log(appNome);