// importar dependencia
//const { response } = require('express');
const express = require('express');
const path = require('path');
const pages = require('./pages.js');


//iniciando express
const server = express();
server
  .use(express.static('public'))

  //configurar tempate engine
  .set('views', path.join(__dirname, "views"))
  .set('view engine', 'hbs')

  // rotas

  .get('/', pages.index) 
  .get('/orphanage', pages.orphanage) 
  .get('/orphanages', pages.orphanages) 
  .get('/create-orphanage', pages.createOrphanage) 



// ligar servidor
server.listen(5500);
