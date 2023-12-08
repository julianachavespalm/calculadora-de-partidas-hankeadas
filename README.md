# Calculadora de Partidas Ranqueadas

## Autora: Juliana Chaves Palm

## Objetivo
Esta calculadora determina o nível do jogador com base em seu saldo de partidas (vitórias - derrotas).

## Linguagem utilizada
JavaScript

## Recursos
- Funções
- Condições (switch case)
- Entrada de dados do usuário (via console)

## Requisitos
- Ambiente Node.js instalado

## Execução do código
1. Abra um terminal.
2. Navegue até o diretório onde o arquivo está salvo.
3. Execute o comando `node index.js`.
4. Siga as instruções no terminal para inserir o número de vitórias e derrotas.

## Dificuldades enfrentadas
A principal dificuldade foi garantir que o saldo de partidas fosse calculado corretamente, considerando vitórias e derrotas.

## Integração futura com um site de rankeamento de jogos
Para integrar essa calculadora a um site de rankamento de jogos, é possível criar uma API que receberá os dados dos jogadores e os armazenará em um banco de dados. Esta API fornecerá endpoints para:
- Receber os dados: O site enviará os dados (como número de vitórias e derrotas) para a API por meio de requisições HTTP.
- Armazenar os dados: A API armazenará esses dados em um banco de dados, permitindo que o jogo acesse informações atualizadas dos jogadores.
- Recuperar os dados: O site ou o jogo poderá solicitar informações sobre um jogador específico à API para exibir seu nível de rankeamento.
