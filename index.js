// Função para simular a interação do jogo com a API para obter dados do jogador
function interacaoComAPI() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function obterVitorias() {
        rl.question('Digite o número de vitórias: ', (vitorias) => {
            if (parseInt(vitorias) < 0) {
                console.log('O número de vitórias não pode ser negativo.');
                obterVitorias(); // Pede novamente o número de vitórias
            } else {
                obterDerrotas(parseInt(vitorias)); // Passa para a função de obter derrotas
            }
        });
    }

    function obterDerrotas(vitorias) {
        rl.question('Digite o número de derrotas: ', (derrotas) => {
            if (parseInt(derrotas) < 0) {
                console.log('O número de derrotas não pode ser negativo.');
                obterDerrotas(vitorias); // Pede novamente o número de derrotas
            } else {
                const saldoPartidas = vitorias - parseInt(derrotas);
                const nivel = calcularNivel(saldoPartidas);
                console.log(`O Herói tem um saldo de ${saldoPartidas} está no nível de ${nivel}.`);
                rl.close();
            }
        });
    }

    obterVitorias(); // Inicia o processo de obter vitórias
}

// Função que calcula o nível do jogador com base no saldo de partidas
function calcularNivel(saldoPartidas) {
    switch (true) {
        case saldoPartidas <= 10:
            return "Ferro";
        case saldoPartidas >= 11 && saldoPartidas <= 20:
            return "Bronze";
        case saldoPartidas >= 21 && saldoPartidas <= 50:
            return "Prata";
        case saldoPartidas >= 51 && saldoPartidas <= 80:
            return "Ouro";
        case saldoPartidas >= 81 && saldoPartidas <= 90:
            return "Diamante";
        case saldoPartidas >= 91 && saldoPartidas <= 100:
            return "Lendário";
        default:
            return "Imortal";
    }
}

// Simulação de interação do jogo com a API para obter dados do jogador
interacaoComAPI();
