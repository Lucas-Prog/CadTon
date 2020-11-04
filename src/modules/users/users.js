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
    if(validate.errors){
        res.status(400).json({"error": validate.errors})
    }else{
        try{
            db.run(`insert into usuarios values(?, "${req.body.user.name}", "${req.body.user.login}")`, (err) =>{
                if(err){
                    if(err.message.indexOf("UNIQUE constraint") >= 0){
                        res.status(400).send({"error": "usuário já cadastrado"});
                    }else
                        res.status(400).send({"message": "error", "err": err.message});
                }
                else{
                    res.status(200).json({"message": "usuário cadastrado com sucesso."});
                }
            })
        }catch(e){
            console.log(e)
        }
    }
})

router.post('/login', async(req, res)=>{
    const validate = LoginSchema.validate(req.body);
    if(validate.errors)
        res.status(400).json({"error": "login invalido", validate})
    else{
        db.get(`select nome, login FROM usuarios WHERE login = ?`, req.body.login ,(err, row) =>{
            if(err)
                res.status(400).json({err});
            if(row)
                res.status(200).json({row});
            else
                res.status(400).json({"error": "Usuário não encontrado"});
        });
        
    }
})

module.exports = router;