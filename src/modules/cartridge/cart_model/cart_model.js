const express = require('express');
const db = require('../../../Db/dbConnection');
const router = express.Router();

router.get('/cart_model', async (req, res) =>{
    try{
        db.all("select * from cart_model", (err, rows) =>{
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

router.post('/cart_model', async (req, res) =>{
    try{
        db.run(`insert into cart_model values(?, "${req.body.name}", "${req.body.imp_model}")`, (err)=>{
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