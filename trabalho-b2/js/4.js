const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu', 'container');


menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
});

let displayValor = '';
let operador = '';
let valorAnterior = '';

function adicionarNumero(numero) {
    displayValor += numero;
    atualizarDisplay();
}

function adicionarOperador(op) {
    if (displayValor === '') return;
    if (operador !== '') {
        calcularResultado();
    }
    operador = op;
    valorAnterior = displayValor;
    displayValor = '';
}

function adicionarDecimal() {
    if (displayValor.includes('.')) return;
    if (displayValor === '') displayValor += '0';
    displayValor += '.';
    atualizarDisplay();
}

function limparDisplay() {
    displayValor = '';
    operador = '';
    valorAnterior = '';
    atualizarDisplay();
}

function calcularResultado() {
    let resultado;
    const valorAtual = parseFloat(displayValor);
    const valorAnt = parseFloat(valorAnterior);

    if (isNaN(valorAnt) || isNaN(valorAtual)) return;

    switch (operador) {
        case '+':
            resultado = valorAnt + valorAtual;
            break;
        case '-':
            resultado = valorAnt - valorAtual;
            break;
        case '*':
            resultado = valorAnt * valorAtual;
            break;
        case '/':
            resultado = valorAnt / valorAtual;
            break;
        default:
            return;
    }

    displayValor = resultado.toString();
    operador = '';
    valorAnterior = '';
    atualizarDisplay();
}

function atualizarDisplay() {
    document.getElementById('display').value = displayValor;
}

//Oculta barra de navegação
document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navigation');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll para baixo
            navbar.classList.add('ocultar-nav');
        } else {
            // Scroll para cima
            navbar.classList.remove('ocultar-nav');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});