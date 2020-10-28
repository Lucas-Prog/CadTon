const express = require('express');
const db = require('../../../Db/dbConnection');
const router = express.Router();

router.get('/cart_baixa', async (req, res) =>{
    try{
        db.all("select cart_data_baixa.*, usuarios.nome as usuario  from cart_data_baixa inner join usuarios on usuarios.ID = cart_data_baixa.f_usuario;", (err, rows) =>{
            if(err){
                res.status(400).json({"error": err.messange});
            }else{
                res.status(200).json({rows})
            }
        })
    }catch(e){
        console.log(e);
    }
});

router.post('/cart_baixa', async (req, res) =>{
    try{
        let date = new Date();
        let dateNow = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}-${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        db.run(`insert into cart_data_baixa values(?, "${dateNow.toString()}", "${req.body.user}")`, (err)=>{
            if(err){
                res.status(400).send({"message": "error", "err": err})
                console.log(err)
            }else{
                console.log(JSON.stringify(req.body));
                res.status(200).json({"message": "Incluido"})
            }
        });
        
    }catch(e){
        console.log(e) 
    }
})


module.exports = router;