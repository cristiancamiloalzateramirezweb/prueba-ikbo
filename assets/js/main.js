const abrirMenu = document.getElementById('btn-menu-open');
const cerrarMenu = document.getElementById('btn-menu-close');
const menu = document.getElementById('nav');

abrirMenu.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});

cerrarMenu.addEventListener('click', () => {
    menu.classList.remove('show-menu');
});

menu.addEventListener('click', e => {
    if (e.target.id === 'nav') {
        menu.classList.remove('show-menu');
    }
});