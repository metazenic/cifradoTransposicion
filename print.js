function println(...params) {
  for (let p of params) {
    if (typeof p == "object") {
      console.table(p);
    } else {
      console.log(p);
    }
  }
}

function print(...params) {
  let linea = "";
  let lista = [];
  let separador = params[params.length - 1];
  if (params <= 1) {
    separador = "";
  }
  for (let p of params) {
    if (typeof p == "object") {
      lista.push(linea);
      lista.push(p);
      linea = "";
    } else {
      linea += `${p} `;
    }
  }
  if (linea != "") {
    lista.push(linea);
  }
  println(...lista);
}

module.exports = {
    println,
    print
}