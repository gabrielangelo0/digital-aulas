const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");

const totalIMC = document.getElementById("total-imc");
const grauIMC = document.getElementById("grau");

let imcGlobal = 0;

function calcularIMC() {
    const peso = Number(pesoInput.value);
    const altura = Number(alturaInput.value);

    if (peso === 0 || altura === 0) {
        alert("Preencha os campos corretamente");
        return;
    }

    const imc = peso / (altura * altura);
    
    console.log(imc);
    imcGlobal = imc;

    totalIMC.innerHTML = imc.toFixed(2);

    if (imc < 18) {
        grauIMC.innerHTML = "Abaixo do peso";
    } else if (imc < 25) {
        grauIMC.innerHTML = "Peso adequado";
    } else if (imc < 30) {
        grauIMC.innerHTML = "Sobrepeso";
    } else {
        grauIMC.innerHTML = "Obesidade";
    }

    return imc;
}