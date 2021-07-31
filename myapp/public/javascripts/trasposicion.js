function letraRandom() {
  return "abcdefghijklmnñopqrstuvwxyz"[Math.floor(Math.random() * Math.floor(27))];
}

function codificar(mensaje, clave) {
  let listaFragmentosMensaje = [];
  let mensajeCifrado = "";

  while (mensaje.length % clave != 0) {
    mensaje += letraRandom();
  }

  let contador = 1;
  while (mensaje.length >= clave * contador) {
    let fragmentoMensaje = "";
    for (let index = 0; index < clave; index++) {
      fragmentoMensaje += mensaje[clave * (contador - 1) + index];
    }
    listaFragmentosMensaje.push(fragmentoMensaje);
    contador++;
  }

  for (let i = 0; i < clave; i++) {
    for (let j = 0; j < listaFragmentosMensaje.length; j++) {
      mensajeCifrado += listaFragmentosMensaje[j][i];
    }
  }
  return mensajeCifrado;
}

module.exports = {
  codificar
}