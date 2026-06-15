function reverter(array) {
    let novoArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        novoArray.push(array[i]);
    }

    return novoArray;
}

console.log(reverter([1, 2, 3, 4, 5]));