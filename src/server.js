const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);


app.listen(3000);




// req.query = acessa a query params(filtros)
// req.params =  acessa o parametro passado na url(editar, deletar)
// req.body = acessa o corpo da requisição(TUDO)

// pega o valor passado na url
// app.put('/users/:id', (req, res) =>{
    // return res.json({ parametro: req.params.id})
// })