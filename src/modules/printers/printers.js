const express = require('express');
const db = require('../../Db/dbConnection');
const router = express.Router();

router.get('/printers', async (req, res) =>{
    try{
        db.all("select * from impressoras;", (err, rows) =>{
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

router.post('/printers', async (req, res) =>{
    try{
        db.run(`insert into impressoras values(?, "${req.body.cod}", "${req.body.local}", "${req.body.status}", "${req.body.n_serial}")`, (err)=>{
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