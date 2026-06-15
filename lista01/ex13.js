function range(inicio, fim) {
    let numeros = [];

    for (let i = inicio; i <= fim; i++) {
        numeros.push(i);
    }

    return numeros;
}

function soma(array) {
    let total = 0;

    for (let numero of array) {
        total += numero;
    }

    return total;
}

console.log(soma(range(1, 10)));