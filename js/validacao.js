function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute //+ para transformar o número de string para número inteiro

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>'
    }

    if(numeroForMaiorOuMenorQueONumeroPermitido(numero)){
        elementoChute.innerHTML += `<div>valor inválido: o número deve ser entre ${menorValor} e ${maiorValor}</div>` 
    }

    if(numero === numeroSecreto){
        document.body.innerHTML += `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3> 

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        ` 
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    } else (numero < numeroSecreto)
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    
}


function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueONumeroPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})