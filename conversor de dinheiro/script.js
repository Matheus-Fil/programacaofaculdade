const valorRealInput = document.querySelector("#valorReal");
const valorDolarInput = document.querySelector("#valorDolar")
const botaoRealParaDolar = document.querySelector("button");
const botaoDolarParaReal = document.querySelector("#btnReverso");

const container = document.querySelector("div");

const resultadoEl = document.createElement("p");
const resultadoEl2 = document.querySelector("#resultadoDolarParaReal");

// estiliza o paragrafo com a convercao para ficar igual ao css
resultadoEl.style.marginTop = "20px";
resultadoEl.style.fontSize = "20px";
resultadoEl.style.fontWeight = "bold";
resultadoEl.style.textAlign = "center";

container.insertBefore(resultadoEl, botaoRealParaDolar);

async function buscarCotacao() {
    const resposta = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL");
    const dados = await resposta.json();
    return parseFloat(dados.USDBRL.ask);
}
    

// addEventlistener cria o evento do click no botao, =>substitui o function.
botaoRealParaDolar.addEventListener("click", async () => {
    const valorReal = Number(valorRealInput.value);
    
    
    if (valorReal > 0) {
        try {
            const resposta = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL");
            const dados = await resposta.json();
            const cotacaoDolar = parseFloat(dados.USDBRL.ask);


            const resultado = valorReal / cotacaoDolar;
            resultadoEl.textContent = `US$ ${resultado.toFixed(2)} (Cotação atual: R$ ${cotacaoDolar.toFixed(2)})`
            // to.Fixed transforma o numero dps da virgula em 2 digitos conforme o valor q esta entre parenteses
            resultadoEl.style.color = "#000";
        }catch (erro) {
            resultadoEl.textContent = "Erro ao obter a cotação. Tente novamente mais tarde."
            resultadoEl.style.color = "#red";
            console.error(erro);
        }


    }else {
        resultadoEl.textContent = "Por favor, digite um valor valido em real.";
        resultadoEl.style.color = "red";
    }
});

resultadoEl2.style.marginTop = "20px";
resultadoEl2.style.fontSize = "20px";
resultadoEl2.style.fontWeight = "bold";
resultadoEl2.style.textAlign = "center";

container.insertBefore(resultadoEl2, botaoDolarParaReal);


botaoDolarParaReal.addEventListener("click", async () => {
    const valorDolar = Number(valorDolarInput.value);
    
    
    if (valorDolar > 0) {
        try {
            const cotacaoDolar = await buscarCotacao();
            const resultado = valorDolar * cotacaoDolar;
            resultadoEl2.textContent = `R$ ${resultado.toFixed(2)} (Cotação atual: R$ ${cotacaoDolar.toFixed(2)})`
            resultadoEl2.style.color = "#000";
        }catch (erro) {
            resultadoEl2.textContent = "Erro ao obter a cotação. Tente novamente mais tarde."
            resultadoEl2.style.color = "#red";
        }


    }else {
        resultadoEl2.textContent = "Por favor, digite um valor valido em dólar.";
        resultadoEl2.style.color = "red";
    }
});
