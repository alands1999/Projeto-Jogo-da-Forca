//função para gerar uma palavra aleatória
function gerarPalavraAleatoria (lista) {
    let numero = Math.floor(Math.random()* lista.length);
    return lista[numero];
};

export default gerarPalavraAleatoria;