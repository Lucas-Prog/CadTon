const { required } = require('joi');
const Joi = require('joi');
const db = require('../../Db/dbConnection');
const express = require('express');
const router =  express.Router();

const UserSchema = Joi.object().keys({
    name: Joi.string().min(3).max(100).lowercase().required(),
    login: Joi.string().min(6).max(50).required()
})


router.get('/user', async(req, res) =>{
    try{
        db.allow("select * from usuarios", (err, rows)=>{
            if(err){
                res.status(400).json({"error": err.message});
            }else if(!err){
                res.status(200).json({rows});
            }
        })
    }catch(e){
        console.log(`error>>>> \n ${e}`);
    }
})

router.post('/user', async(req, res)=>{
   const validate = UserSchema.validate(req.body.user);
   
   res.status(200).json({validate});
})


module.exports = router;