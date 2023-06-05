function atualizarRelogio() {
    var dataAtual = new Date();
    var horas = formatarNumero(dataAtual.getHours());
    var minutos = formatarNumero(dataAtual.getMinutes());
    var segundos = formatarNumero(dataAtual.getSeconds());
  
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;
  }
  
  function formatarNumero(numero) {
    return numero < 10 ? "0" + numero : numero;
  }
  
  setInterval(atualizarRelogio, 1000);
  // 