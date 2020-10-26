const express = require('express');
const db = require('../../Db/dbConnection.js');
const router = express.Router();

router.get('/fabricante', async (req, res) =>{
    try{
        db.all("select * from fabricante", (err, rows) =>{
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

router.post('/fabricante', async (req, res) =>{
    try{
        db.run(`insert into fabricante values(?, "${req.body.name}")`, (err)=>{
            if(err){
                res.status(400).send({"message": "error", "err": err})
                console.log(err)
            }else{
                console.log(JSON.stringify(req.body.name));
                res.status(200).json({"message": "Incluido"})
            }
        });
        
    }catch(e){
        console.log(e) 
    }
})


module.exports = router;