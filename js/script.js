// Pegar os botões de operação, número e limpar
// Botões de número
let botoesNum = document.querySelectorAll('button[data-num]');
botoesNum = Array.from(botoesNum);

// Botões de operação
let botoesOpe = document.querySelectorAll('button[data-operacao]');
botoesOpe = Array.from(botoesOpe);

// Botões de limpar
let botoesLim = document.querySelectorAll('button[data-limpar]');
botoesLim = Array.from(botoesLim);

// Botões do resultado
let botaoResult = document.querySelector('button[data-resultado]');

// Painel de info
let painelTexto = document.querySelector('.painel p');

// Capturar o clique do botão
botoesNum.map(botao => {
    botao.addEventListener('click', calculadora);
})
botoesOpe.map(botao => {
    botao.addEventListener('click', calculadora);
})
botoesLim.map(botao => {
    botao.addEventListener('click', calculadora);
})

botaoResult.addEventListener('click', calcularResultado);

// Declaração das variáveis.
let numeroDigitado, operacaoEscolhida, limparEscolhido, numeroGuardado, operacao, resultado, numeroAntigo;

function calculadora(event) {

    numeroDigitado = capturarNumero(event);
    operacaoEscolhida = capturarOperacao(event);
    limparEscolhido = limparCampo(event);

    !!numeroDigitado ? exibirNoPainel(numeroDigitado) : "";

    !!operacaoEscolhida ? (
        guardarOperacao(operacaoEscolhida),
        guardarNumero()
    ) : "";

    !!limparEscolhido ? limparTela(limparEscolhido) : "";

}

// Identificar qual valor está presente no botão que foi clicado
function capturarNumero(event) {
    return event.target.dataset.num
}
function capturarOperacao(event) {
    return event.target.dataset.operacao
}
function limparCampo(event) {
    return event.target.dataset.limpar
}

// Tenho que guardar o número anterior e pegar o número atual.
function guardarNumero() {

    if (operacao != "") {

        numeroGuardado = numeroAntigo;
        console.log(numeroGuardado);
        limparTela('AC');
    }
}

// Exibir o valor digitado na tela  
function exibirNoPainel(valorASerExibido) {

    if (painelTexto.textContent.length <= 18) {
        painelTexto.textContent += valorASerExibido;
    }
}

// Opção para limpar a tela para a próxima operação.
function limparTela(limparEscolhido) {

    if (limparEscolhido === "C") {
        let textoModificado = painelTexto.textContent.slice(0, -1) // O slice selecionar parte da string para exibir
        painelTexto.textContent = textoModificado;
    }
    else if (limparEscolhido === "AC") {
        painelTexto.textContent = '';
    }
}

function guardarOperacao(operacaoEscolhida) {

    operacao = operacaoEscolhida;
    operacao != "" ? numeroAntigo = painelTexto.textContent : "";
}

function limparVariaveis() {

    resultado = 0;
    numeroGuardado = "";
    numeroAntigo = "";
    operacao = "";
}

function calcularResultado() {

    console.log(painelTexto.textContent);

    switch (operacao) {
        case "%":
            resultado = ((parseInt(numeroGuardado) / 100) * parseInt(painelTexto.textContent));
            limparTela('AC');
            exibirNoPainel(resultado);
            limparVariaveis();
            break;
        case "x":
            resultado = (parseInt(numeroGuardado) * parseInt(painelTexto.textContent));
            limparTela('AC');
            exibirNoPainel(resultado);
            limparVariaveis();
            break;
        case "/":
            resultado = (parseInt(numeroGuardado) / parseInt(painelTexto.textContent));
            limparTela('AC');
            exibirNoPainel(resultado);
            limparVariaveis();
            break;
        case "+":
            resultado = (parseInt(numeroGuardado) + parseInt(painelTexto.textContent));
            limparTela('AC');
            exibirNoPainel(resultado);
            limparVariaveis();
            break;
        case "-":
            resultado = (parseInt(numeroGuardado) - parseInt(painelTexto.textContent));
            limparTela('AC');
            exibirNoPainel(resultado);
            break;
    }
}