const express = require('express');
const router = express.Router();



router.get('/Gerardo', function (req, res, next){
  res.status(200).send("Este es mi nombre: Gerardo Aldair Ponce Gomez");
});

router.get('/:name', function (req, res, next) {
  res.status(200).send("Hello " + req.params.name);
});

router.get('/', function (req, res, next){
  res.status(200).send(`
    ERROR 404
    `);
});


module.exports = router;
