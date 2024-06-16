const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu', 'container');


menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
});

function converterTempo() {
    // Obter o valor do tempo e a unidade selecionada
    let tempo = parseFloat(document.getElementById('tempoInput').value);
    let unidade = document.getElementById('unitSelect').value;

    // Converter de Horas para Minutos
    if (unidade === 'hora') {
        let minutos = tempo * 60;
        document.getElementById('resultado').innerText = `${tempo} horas equivalem a ${minutos} minutos.`;
    }
    // Converter de Minutos para Horas
    else if (unidade === 'minuto') {
        let horas = tempo / 60;
        document.getElementById('resultado').innerText = `${tempo} minutos equivalem a ${horas} horas.`;
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