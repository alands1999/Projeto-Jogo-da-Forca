//função valida o input do usuário
function validaResposta (resposta) {
    if (resposta.length == 1 && resposta.match(/[a-z]/) ) {
        return true;
    } else {
        return false;
    }
};

//função atualiza forca
function attPalavraOculta(palavraOculta, letraDigitada, palavra, chances) {
    let array = palavraOculta.split("");
    let letraEncontrada = false;

    for (let i = 1; i < palavra.length; i++) {
        if (letraDigitada === palavra[i]) {
            array[i] = letraDigitada;
            letraEncontrada = true;
        }
    }

    if (!letraEncontrada) {
        chances--;
    }

    // Se a letra foi encontrada, retorna a palavra oculta atualizada
    if (letraEncontrada) {
        palavraOculta = array.join("");
    } 
    return {palavraOculta, chances};
};

export {validaResposta, attPalavraOculta};