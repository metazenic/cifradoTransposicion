function letraRandom() {
  return "abcdefghijklmnñopqrstuvwxyz"[
    Math.floor(Math.random() * Math.floor(27))
  ];
}

function fragmentarMensaje(mensaje, clave) {
  let listaFragmentosMensaje = [];

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

  return listaFragmentosMensaje;
}

function codificar(mensaje, clave) {
  const mensajeFragmentado = fragmentarMensaje(mensaje, clave);
  let mensajeCifrado = "";

  for (let i = 0; i < clave; i++) {
    for (let j = 0; j < mensajeFragmentado.length; j++) {
      mensajeCifrado += mensajeFragmentado[j][i];
    }
  }
  return mensajeCifrado;
}

module.exports = {
  codificar,
};
