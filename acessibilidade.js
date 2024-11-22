let painelAberto = false;

// Alternar o painel de acessibilidade
function togglePainel() {
    const painel = document.getElementById('painel-acessibilidade');
    painelAberto = !painelAberto;

    if (painelAberto) {
        painel.classList.add('active');
        painel.classList.remove('recolhido');
    } else {
        painel.classList.remove('active');
        painel.classList.add('recolhido');
    }
}


// Filtro de Daltonismo
function ativarFiltroDaltonismo() {
    document.body.classList.toggle('filtro-deuteranopia'); // Adiciona ou remove o filtro
}

// Modo de Alto Contraste
function ativarContraste() {
    document.body.classList.toggle('alto-contraste'); // Adiciona ou remove a classe
}

// Função para ajustar o tamanho do texto em todo o site
function ajustarFonte(incremento) {
    tamanhoFonte += incremento; // Incrementa ou decrementa o tamanho
    document.documentElement.style.fontSize = `${tamanhoFonte}px`; // Aplica no root (html)
}

// Leitura de Texto em Voz Alta
function lerTexto() {
    const textoSelecionado = window.getSelection().toString(); // Captura o texto selecionado
    if (textoSelecionado) {
        const mensagem = new SpeechSynthesisUtterance(textoSelecionado);
        mensagem.lang = 'pt-BR'; // Define o idioma
        speechSynthesis.speak(mensagem);
    } else {
        alert('Selecione um texto para ouvir.');
    }
}

// Tamanho padrão inicial
let tamanhoFonte = 10; // Tamanho inicial em pixels (1rem = 10px)

// Função para ajustar o tamanho do texto
function ajustarFonte(incremento) {
    tamanhoFonte += incremento;
    if (tamanhoFonte < 8) tamanhoFonte = 8; // Limite mínimo
    if (tamanhoFonte > 24) tamanhoFonte = 24; // Limite máximo
    document.documentElement.style.fontSize = `${tamanhoFonte}px`; // Aplica no <html>
}
