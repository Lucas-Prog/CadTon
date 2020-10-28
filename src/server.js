const express = require('express');
const routes = require('./routes');
const fab = require('./modules/fabricantes/fabricante');
const pModel = require('./modules/printer_model/priter_model');
const printers = require('./modules/printers/printers');
const cart_status = require('./modules/cartridge/cart_status/cart_status.js');
const cart_model = require('./modules/cartridge/cart_model/cart_model');
const cart_entrada = require('./modules/cartridge/cart_data_entrada/cart_data_entrada');
const cart_saida = require('./modules/cartridge/cart_data_saida/cart_data_saida');
const cart_install = require('./modules/cartridge/cart_data_instala/cart_data_instala');
const cart_baixa = require('./modules/cartridge/cart_data_baixa/cart_data_baixa');

const app = express();


app.use(express.json());
app.use(routes);
app.use(fab);
app.use(pModel);
app.use(cart_status);
app.use(cart_model);
app.use(cart_entrada);
app.use(cart_saida);
app.use(cart_install);
app.use(cart_baixa);
app.use(printers);

app.listen(3000);




// req.query = acessa a query params(filtros)
// req.params =  acessa o parametro passado na url(editar, deletar)
// req.body = acessa o corpo da requisição(TUDO)

// pega o valor passado na url
// app.put('/users/:id', (req, res) =>{
    // return res.json({ parametro: req.params.id})
// })