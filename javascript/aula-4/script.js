// Objetos em JavaScript

// Informacoes do Civic G10

// function ligarCarro() {
//     console.log("Carro ligado!");
// }

const carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2020,
    cor: "preto",
    corDoInterior: "bege",
    cambio: "automatico",
    ePremium: true,
    preco: 120000,
    precoDeRevenda: 80000,
    ligar: () => {
        console.log("Carro ligado!");
    },
    cliente: {
        nome: "Gabriel",
        cpf: "123.456.789-00",
        idade: 18,
        dataDaCompra: "05/04/2025"
    }
};

console.log(carro);

// Acessando o preço do carro
console.log(carro.preco);

console.log(carro["preco"], carro["modelo"]);

// Acessando o nome do cliente

console.log(carro.cliente.nome);

// Vamos criar uma mensagem alertando que o carro já está pronto para ser retirado

const mensagem = "Olá, " + carro.cliente.nome + " seu carro: " + carro.marca + " " + carro.modelo + " já está pronto para retirada."

const mensagemDois = `Olá, ${carro.cliente.nome} seu carro: ${carro.marca} ${carro.modelo} já está pronto para retirada.`

console.log(mensagem)

console.log(mensagemDois)

// Ligando o carro

carro.ligar()