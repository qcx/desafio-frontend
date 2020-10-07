const options = document.querySelectorAll('.opcoes a');

window.addEventListener('load', () => {
  listenOptions();
});

function listenOptions() {
  for (const option of options) {
    option.addEventListener('click', aplicarEfeito);
  }
}

function aplicarEfeito(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const inicial = document.querySelector(href).offsetTop;

  scroll({
    top: inicial,
    behavior: 'smooth',
  });
}
