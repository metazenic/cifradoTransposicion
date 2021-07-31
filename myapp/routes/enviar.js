var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/enviar', function(req, res, next) {
  res.render('enviar', { title: 'Estas en un get' });
});

router.post('/enviar', function(req, res, next) {
    res.render('enviar', { title: 'estas en un post' });
  })

module.exports = router;