const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu', 'container');


menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
});

//Oculta as DIVs com os nomes
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu');
    const thumbnailsContainers = document.querySelectorAll('.thumbnails-container, .thumbnails-container2, .thumbnails-container3, .thumbnails-container4, .thumbnails-container5, .thumbnails-container6, .thumbnails-container7, .thumbnails-container8, .thumbnails-container9, .thumbnails-container10, .home-text');

    menuToggle.addEventListener('click', function() {
        thumbnailsContainers.forEach(function(thumbnailsContainer) {
            thumbnailsContainer.classList.toggle('thumbnails-hidden');
            thumbnailsContainer.classList.toggle('thumbnails-visible');
        });
    });
});

//Produtos
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu');
    const ocutarCards = document.querySelector('.card-container');

    menuToggle.addEventListener('click', function() {
        if (ocutarCards.style.display === 'none') {
            ocutarCards.style.display = 'block'; // Exibe o elemento h2 se estiver oculto
        } else {
            ocutarCards.style.display = 'none'; // Oculta o elemento h2 se estiver visível
        }
    });
});

//Sobre
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu');
    const homeSection = document.querySelector('.home');
    const footer = document.querySelector('footer');
    let homeVisible = true;

    menuToggle.addEventListener('click', function() {
        if (homeVisible) {
            homeSection.style.display = 'none'; // Oculta a <section class="home">
            footer.style.display = 'none'; // Oculta o footer
        } else {
            homeSection.style.display = 'block'; // Exibe a <section class="home">
            footer.style.display = 'block'; // Exibe o footer
        }
        homeVisible = !homeVisible; // Alterna o estado de visibilidade
    });
});



//Contatos
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu');
    const integrantesDoGrupo = document.querySelector('h2');

    menuToggle.addEventListener('click', function() {
        if (integrantesDoGrupo.style.display === 'none') {
            integrantesDoGrupo.style.display = 'block'; // Exibe o elemento h2 se estiver oculto
        } else {
            integrantesDoGrupo.style.display = 'none'; // Oculta o elemento h2 se estiver visível
        }
    });
});


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


// Slide
let slideIndex = 0;

function showSlide() {
    const slides = document.querySelectorAll('.slide');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    const offset = -slideIndex * 100;
    document.querySelector('.slider-content').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    slideIndex++;
    showSlide();
}

function prevSlide() {
    slideIndex--;
    showSlide();
}
// Fim Slide