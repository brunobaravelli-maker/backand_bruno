function calcular(a, b, operacao) {
    return operacao(a, b);
}

console.log(calcular(10, 5, (a, b) => a + b));
console.log(calcular(10, 5, (a, b) => a - b));
console.log(calcular(10, 5, (a, b) => a * b));