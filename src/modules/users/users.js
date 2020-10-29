const { required } = require('joi');
const Joi = require('joi');
const db = require('../../Db/dbConnection');
const express = require('express');
const router =  express.Router();

const UserSchema = Joi.object().keys({
    name: Joi.string().min(3).max(100).lowercase().required(),
    login: Joi.string().min(6).max(30).required()
})
const LoginSchema = Joi.object().keys({
        login: Joi.string().min(6).max(30).required()
})


router.get('/user', async(req, res) =>{
    try{
        if(req.query.id){
            db.all(`select * from usuarios where ID = ${req.query.id}`, (err, rows)=>{
                if(err){
                    res.status(400).json({"error": err.message});
                }else if(rows.length === 0){
                    res.status(400).json({"error": "Usuário não encontrado"});
                }else if(!err){
                    res.status(200).json({rows});
                }
            })
        }else{
            db.all("select * from usuarios", (err, rows)=>{ 
                if(err){
                    res.status(400).json({"error": err.message});
                }else if(!err){
                    res.status(200).json({rows});
                }
            })
        }
    }catch(e){
        console.log(`error>>>> \n ${e}`);
    }
})

router.post('/user', async(req, res)=>{
    const validate = UserSchema.validate(req.body.user);
    res.status(200).json({"error": validate.error ? validate.error : false});

})

router.post('/login', async(req, res)=>{
    const validate = LoginSchema.validate(req.body);
    db.get(`select `)
    
    res.status(200).json({"error": validate.error ? validate.error : false});

})

module.exports = router;