const produtos = [
    { id: 1, nome: "Mouse", preco: 50 },
    { id: 2, nome: "Teclado", preco: 120 },
    { id: 3, nome: "Monitor", preco: 800 },
    { id: 4, nome: "Headset", preco: 150 },
    { id: 5, nome: "Webcam", preco: 90 }
];

// a)
console.log(produtos.find(produto => produto.id === 3));

// b)
console.log(produtos.filter(produto => produto.preco > 100));

// c)
console.log(produtos.map(produto => produto.nome));

// d)
produtos.forEach(produto => {
    console.log(`${produto.id} - ${produto.nome} - R$${produto.preco}`);
});