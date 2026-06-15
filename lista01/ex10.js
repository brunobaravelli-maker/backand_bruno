function contarLetra(texto, letra) {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === letra) {
            contador++;
        }
    }

    return contador;
}

console.log(contarLetra("banana", "a"));