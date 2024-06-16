const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu', 'container');


menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
});

function converterTemperatura() {
    // Obter o valor da temperatura e a unidade selecionada
    let temperatura = parseFloat(document.getElementById('tempInput').value);
    let unidade = document.getElementById('unitSelect').value;

    // Converter de Celsius para Fahrenheit
    if (unidade === 'celsius') {
        let fahrenheit = (temperatura * 9/5) + 32;
        document.getElementById('resultado').innerText = `${temperatura} graus Celsius equivalem a ${fahrenheit.toFixed(2)} graus Fahrenheit.`;
    }
    // Converter de Fahrenheit para Celsius
    else if (unidade === 'fahrenheit') {
        let celsius = (temperatura - 32) * 5/9;
        document.getElementById('resultado').innerText = `${temperatura} graus Fahrenheit equivalem a ${celsius.toFixed(2)} graus Celsius.`;
    }
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