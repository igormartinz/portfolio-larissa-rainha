const modalOverlay = document.getElementById('modalCarrossel');
const modalImg = document.getElementById('modalImg');
const modalFechar = document.getElementById('modalFechar');
const modalPrev = document.getElementById('modalPrev');
const modalNext = document.getElementById('modalNext');
const modalContador = document.getElementById('modalContador');

let imagensGrupo = [];
let indexAtual = 0;

// Coleta todas as imagens com data-grupo
document.querySelectorAll('[data-grupo]').forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => {
    const grupo = img.dataset.grupo;
    imagensGrupo = Array.from(document.querySelectorAll(`[data-grupo="${grupo}"]`));
    indexAtual = parseInt(img.dataset.index);
    abrirModal();
  });
});

function abrirModal() {
  modalImg.src = imagensGrupo[indexAtual].src;
  atualizarContador();
  modalOverlay.classList.add('ativo');
  document.body.style.overflow = 'hidden';
}

function atualizarContador() {
  modalContador.textContent = `${indexAtual + 1} / ${imagensGrupo.length}`;
  modalPrev.style.opacity = indexAtual === 0 ? '0.3' : '1';
  modalNext.style.opacity = indexAtual === imagensGrupo.length - 1 ? '0.3' : '1';
}

function fecharModal() {
  modalOverlay.classList.remove('ativo');
  document.body.style.overflow = '';
}

modalFechar.addEventListener('click', fecharModal);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) fecharModal();
});

modalPrev.addEventListener('click', () => {
  if (indexAtual > 0) {
    indexAtual--;
    modalImg.src = imagensGrupo[indexAtual].src;
    atualizarContador();
  }
});

modalNext.addEventListener('click', () => {
  if (indexAtual < imagensGrupo.length - 1) {
    indexAtual++;
    modalImg.src = imagensGrupo[indexAtual].src;
    atualizarContador();
  }
});

// Navegação pelo teclado
document.addEventListener('keydown', (e) => {
  if (!modalOverlay.classList.contains('ativo')) return;
  if (e.key === 'ArrowLeft') modalPrev.click();
  if (e.key === 'ArrowRight') modalNext.click();
  if (e.key === 'Escape') fecharModal();
});