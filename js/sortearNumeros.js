const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()


//Função para gerar o número aleatório sem casas decimais
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}


//Inserindo o valor dinâmicamente no HTML
const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor


const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor