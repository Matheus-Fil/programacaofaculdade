const valorRealInput = document.querySelector("#valorReal");
const botao = document.querySelector("button");
const container = document.querySelector("div");

const resultadoEl = document.createElement("p");

// estiliza o paragrafo com a convercao para ficar igual ao css
resultadoEl.style.marginTop = "20px";
resultadoEl.style.fontSize = "20px";
resultadoEl.style.fontWeight = "bold";
resultadoEl.style.textAlign = "center";

container.insertBefore(resultadoEl, botao);

// addEventlistener cria o evento do click no botao, =>substitui o function.
botao.addEventListener("click", () => {
    const valorReal = Number(valorRealInput.value);
    const cotacaoDolar = 5.61;
    
    if (valorReal > 0) {
        const resultado = valorReal / cotacaoDolar;
        resultadoEl.textContent = `US$ ${resultado.toFixed(2)};` 
        // to.Fixed transforma o numero dps da virgula em 2 digitos conforme o valor q esta entre parenteses 
        resultadoEl.style.color = "#000";
    } else {
        resultadoEl.textContent = "Por favor, digite um valor valido.";
        resultadoEl.style.color = "red";
    }
});
