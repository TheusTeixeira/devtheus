const ponteiroHoras = document.querySelector(".ponteiro.hr");
const ponteiroMinutos = document.querySelector(".ponteiro.min");
const ponteiroSegundos = document.querySelector(".ponteiro.seg");

/* relogio digital */
const digHoras = document.querySelector(".horas");
const digMinutos = document.querySelector(".minutos");
const digSegundos = document.querySelector(".segundos");

const setRot = (element, rotPorcentagem) => {
  element.style.setProperty( "--rot", rotPorcentagem * 360);
};

const setDig = (element, value) => {
  element.textContent = value;
};

const setRelogio = function() {
  const dataAtual = new Date();

  const segPorcentagem = dataAtual.getSeconds() / 60;
  const minPorcentagem = dataAtual.getMinutes() / 60;
  const hrPorcentagem = dataAtual.getHours() / 12;

/* relogio digital*/
  const hrDig = dataAtual.getHours();
  const mnDig = dataAtual.getMinutes();
  const sgDig = dataAtual.getSeconds();
  
  setRot(ponteiroSegundos, segPorcentagem);
  setRot(ponteiroMinutos, minPorcentagem);
  setRot(ponteiroHoras, hrPorcentagem);

  /* relogio digital*/
setDig(digHoras, hrDig);
setDig(digMinutos, mnDig);
setDig(digSegundos, sgDig);

};
setRelogio();
setInterval(setRelogio, 1000);
