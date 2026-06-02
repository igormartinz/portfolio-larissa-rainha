const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('menu');
const cabecalho = document.querySelector('.cabecalho');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    cabecalho.classList.toggle('sem-sombra');
});

const btnProjetos = document.getElementById('btnProjetos');
const submenuProjetos = document.getElementById('submenuProjetos');
const setaProjetos = document.getElementById('setaProjetos');

btnProjetos.addEventListener('click', () => {
    submenuProjetos.classList.toggle('ativo');
    setaProjetos.classList.toggle('ativa');
});