const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('menu');
const cabecalho = document.querySelector('.cabecalho');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    cabecalho.classList.toggle('sem-sombra');
});

function moverMenu(e) {
  if (e.matches) {
    cabecalho.appendChild(menu); // move para dentro no desktop
  } else {
    cabecalho.parentElement.appendChild(menu); // volta para o header no mobile
  }
}

const desktop = window.matchMedia('(min-width: 992px)');
desktop.addEventListener('change', moverMenu);
moverMenu(desktop); // executa ao carregar

const btnProjetos = document.getElementById('btnProjetos');
const submenuProjetos = document.getElementById('submenuProjetos');
const setaProjetos = document.getElementById('setaProjetos');

btnProjetos.addEventListener('click', () => {
  if (window.matchMedia('(min-width: 992px)').matches) {
    document.getElementById('sumario').scrollIntoView({ behavior: 'smooth' });
  } else {
    submenuProjetos.classList.toggle('ativo');
    setaProjetos.classList.toggle('ativa');
  }
});