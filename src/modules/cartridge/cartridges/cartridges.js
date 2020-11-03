const Joi = require('joi');
const db = require('../../../Db/dbConnection');
const express = require('express');
const router = express.Router();

router.get('/cartridges', async(req, res) =>{
    try{
        db.all("select * from cartuchos", (err, rows) =>{
            res.status(200).json({rows});
        })
    }catch(e){
        console.log(e);
    }
});

router.post('/cartridges', async(req, res) =>{
    try{
        db.run('insert into ')
    }catch(e){
        console.log(e);
    }
})

module.exports = router;