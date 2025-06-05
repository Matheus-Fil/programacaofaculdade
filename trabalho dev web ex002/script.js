let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");


function calcularIMC() {

    let pesoValor  = Number(peso.value);
    let alturaValor =  Number(altura.value);

    let imc = pesoValor / (alturaValor * alturaValor);

    if(imc <= 18.5){
        resultado.textContent = "Você esta abaixo do peso";

    }else if( imc >= 18.5 && imc <= 24.9){
        resultado.textContent = "Você esta no peso normal";

    }else if(imc >= 25 && imc <= 29.9){
        resultado.textContent = "Você esta sobrepeso";

    }else if(imc >= 30 && imc <= 34.9){
        resultado.textContent = "Você esta com Obesidade grau 1";

    }else if(imc >= 35 && imc <= 39.9){
        resultado.textContent = "Você esta com Obesidade grau 2";

    }else  {
        resultado.textContent = "Você esta com Obesidade grau 3";

    }

}
botao.onclick = calcularIMC;
