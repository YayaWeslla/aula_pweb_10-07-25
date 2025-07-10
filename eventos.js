const paragrafo = document.getElementById("mensagem");
const botao = document.getElementById("botao");
const caixa = document.getElementById("caixa-colorida")

//console.log(paragrafo);
//console.log(botao);

/*
botao.addEventListener("click", function(){
    paragrafo.textContent = "Você clicou no botão!";
    paragrafo.classList.toggle("ativo"); //se estiver ativo, tira, se não, não tira
    //botao.disabled = true; //desativa o botão
    caixa.style.backgroundColor = "#3498db";
});*/

function clickBotao(){
    paragrafo.textContent = "Você clicou no botão!";
    paragrafo.classList.toggle("ativo"); //se estiver ativo, tira, se não, não tira
    //botao.disabled = true; //desativa o botão
    caixa.style.backgroundColor = "#3498db";
}