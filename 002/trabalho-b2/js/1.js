const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu', 'container');


menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
});

function converterMedida() {
    // Obter o valor da medida e a unidade selecionada
    let medida = parseFloat(document.getElementById('medidaInput').value);
    let unidade = document.getElementById('unitSelect').value;

    // Converter de Centímetros para Metros
    if (unidade === 'cm') {
        let metros = medida / 100;
        document.getElementById('resultado').innerText = `${medida} centímetros equivalem a ${metros.toFixed(2)} metros.`;
    }
    // Converter de Metros para Centímetros
    else if (unidade === 'm') {
        let centimetros = medida * 100;
        document.getElementById('resultado').innerText = `${medida} metros equivalem a ${centimetros.toFixed(2)} centímetros.`;
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