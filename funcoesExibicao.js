
//função exibir iniicio
function mensagemInicio (palavra) {
    return console.log(`-----------JOGO DA FORCA------------
    \nNome da fruta com ${palavra.length} letras`);
};

//função para exibir a forca 
function gerarPalavraOculta (palavra) {
    let primeiraLetra = palavra[0];
    let underline = "_".repeat(palavra.length -1);
    let palavraOculta = primeiraLetra + underline;
    return palavraOculta;
};

//função exibe palavra oculta
function exibePalavraOculta (palavra) {
    return console.log(palavra)
};

//função exibe mensagem final;
function mensagemFinal (chances, palavraOculta, palavra, status) {

    if (chances === 0) {
        console.log(`Você perdeu :( fim de jogo. \nA palavra era: ${palavra}`)
        status = "Fim";

    } else if (!palavraOculta.includes('_')) {
        console.log("Parabéns! Você venceu!");
        console.log(`Fim de jogo. Palavra: ${palavra}`);
        status = "Fim";
    };

    return status;
};

export {mensagemInicio, gerarPalavraOculta, mensagemFinal};
