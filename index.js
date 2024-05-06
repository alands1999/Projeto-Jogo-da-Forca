import input from 'readline-sync';
import listaDeFrutas from './colecaodados.js';
import gerarPalavraAleatoria from './funcoesGerarPalavras.js';
import {validaResposta, attPalavraOculta} from './funcoesValidacao.js';
import {mensagemInicio, gerarPalavraOculta, mensagemFinal} from './funcoesExibicao.js';


let palavraJogo = gerarPalavraAleatoria(listaDeFrutas);
let inicioJogo = mensagemInicio(palavraJogo);
let palavraOcultaJogo = gerarPalavraOculta(palavraJogo);

let statusJogo = "em andamento";
let tentativas = 4;

while (statusJogo === "em andamento" || tentativas > 0 ) {
console.log(palavraOcultaJogo);   

let respostaUser = input.question("Insira uma letra: \n");

if (validaResposta(respostaUser)) {
    let resultado = attPalavraOculta(palavraOcultaJogo, respostaUser, palavraJogo, tentativas);
    palavraOcultaJogo = resultado.palavraOculta;
    tentativas = resultado.chances;
    console.log(`\nVocê tem ${tentativas} tentativas`)
} else {
console.log("\nLetra inválida ");
}

statusJogo = mensagemFinal(tentativas, palavraOcultaJogo, palavraJogo, statusJogo);
if (statusJogo == "Fim"){
    break;
};};



