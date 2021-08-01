var express = require('express');
var router = express.Router();
var tras = require('.././public/javascripts/trasposicion');

/* GET home page. */
router.get('/enviar', function(req, res, next) {
  res.render('enviar', { title: 'Estas en un get', msg:' ' });
});

router.post('/enviar', function(req, res, next) {
    let contenido = req.body.mensaje
    let clave = req.body.clave
    let codificado = tras.codificar(contenido, clave)
    res.render('enviar', { title: 'estas en un post', msg: contenido, pass: clave, cod: codificado });
  })

module.exports = {
  router
}
