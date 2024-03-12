// Declara variáveis para os ingressos disponíveis
var pistaDisponivel = 100;              // Número de ingressos disponíveis para a área de pista
var cadeiraSuperiorDisponivel = 200;    // Número de ingressos disponíveis para a área de cadeiras superiores
var cadeiraInferiorDisponivel = 400;    // Número de ingressos disponíveis para a área de cadeiras inferiores

// Seleciona o elemento <h1> na página da web
var texto = document.querySelector('h1');

// Função para lidar com a compra de ingressos
function comprar() {
    // Obtém a quantidade e o tipo de ingresso selecionados pelo usuário
    var quantidade = document.getElementById('qtd').value;
    var tipoIngresso = document.getElementById('tipo-ingresso').value;

    // Verifica se a quantidade selecionada é válida (entre 1 e 10)
    if (quantidade < 1 || quantidade > 10) {
        alert('Quantidade inválida');
        return;
    }

    // Verifica se o tipo de ingresso selecionado está disponível e atualiza os ingressos disponíveis conforme necessário
    if (tipoIngresso == 'pista') {
        if (quantidade > pistaDisponivel) {
            alert('Quantidade indisponível');
            return;
        }
        pistaDisponivel -= quantidade;
        document.getElementById('qtd-pista').innerHTML = pistaDisponivel;
        document.getElementById('qtd').value = '';
        console.log(quantidade)
    } else if (tipoIngresso == 'superior') {
        if (quantidade > cadeiraSuperiorDisponivel) {
            alert('Quantidade indisponível');
            return;
        }
        cadeiraSuperiorDisponivel -= quantidade;
        document.getElementById('qtd-superior').innerHTML = cadeiraSuperiorDisponivel;
        document.getElementById('qtd').value = '';
    } else if (tipoIngresso == 'inferior') {
        if (quantidade > cadeiraInferiorDisponivel) {
            alert('Quantidade indisponível');
            return;
        }
        cadeiraInferiorDisponivel -= quantidade;
        document.getElementById('qtd-inferior').innerHTML = cadeiraInferiorDisponivel;
        document.getElementById('qtd').value = '';
    }

    // Exibe uma mensagem de sucesso após completar a compra
    alert(`Compra de ${quantidade} ${quantidade > 1 ? 'ingressos' : 'ingresso'} ${tipoIngresso} realizada com sucesso!`)
}