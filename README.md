# Projeto Jogo da Forca

O "Jogo da Forca em Terminal" é uma aplicação desenvolvida em JavaScript e executada diretamente no terminal usando Node.js. O jogo utiliza a biblioteca readline-sync para receber inputs do usuário de forma síncrona, permitindo uma interação intuitiva.

O código principal está contido em index.js, onde são importadas diversas funcionalidades essenciais para o funcionamento do jogo. A lógica central é estruturada em um loop que controla o fluxo do jogo enquanto o status estiver "em andamento" e houver tentativas restantes. Durante cada iteração, a palavra oculta é exibida, e o usuário é solicitado a inserir uma letra. As respostas são validadas pela função validaResposta em funcoesValidacao.js.

Se a resposta do usuário for válida, a função attPalavraOculta em funcoesValidacao.js é chamada para atualizar a palavra oculta com as letras corretas, e as tentativas restantes são ajustadas conforme necessário. O status do jogo é atualizado pela função mensagemFinal em funcoesExibicao.js, que determina se o jogador ganhou ou perdeu.

As funções de exibição, como mensagemInicio e gerarPalavraOculta, definidas em funcoesExibicao.js, são responsáveis por exibir mensagens informativas e gerar a representação da palavra oculta inicialmente.

Além disso, o jogo faz uso do módulo colecaodados.js para armazenar uma lista de palavras possíveis, e do módulo funcoesGerarPalavras.js para gerar uma palavra aleatória a partir dessa lista.

O código é estruturado de forma modular e legível, facilitando a manutenção e a adição de novos recursos. Combinando lógica de jogo eficiente com uma interface simples, o "Jogo da Forca em Terminal" oferece uma experiência divertida e envolvente para os jogadores.

##Projeto: 
![1](https://github.com/alands1999/Projeto-Jogo-da-Forca/assets/150439841/86c41a61-7db9-4dab-b905-9529b7b7e148)
