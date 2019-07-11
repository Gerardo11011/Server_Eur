var express = require ('express');
var app = express();
var PORT = 8080;
const path = require('path');



//Route para la pagina index
router = require ('./route');
app.use('/', router);





app.listen(PORT, function() {
  console.log('Server running on port: ', PORT);
});
