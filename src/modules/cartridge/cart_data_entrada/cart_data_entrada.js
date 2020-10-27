const express = require('express');
const db = require('../../../Db/dbConnection');
const router = express.Router();

router.get('/cart_entrada', async (req, res) =>{
    try{
        db.all("select * from cart_data_entrada", (err, rows) =>{
            if(err){
                res.status(400).json({"error": err.message});
            }else{
                res.status(200).json({rows})
            }
        })
    }catch(e){
        console.log(e);
    }
});

router.post('/cart_entrada', async (req, res) =>{
    try{
        let date = new Date();
        let dateNow = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}-${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        db.run(`insert into cart_data_entrada values(?, "${dateNow.toString()}", "${req.body.user}")`, (err)=>{
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