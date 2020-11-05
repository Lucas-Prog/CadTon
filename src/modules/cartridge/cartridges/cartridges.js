const expess = require('express');
const db = require('../../../Db/dbConnection');
const router = expess.Router();

router.get('/cartridges', async(req, res)=>{
    try{
        db.all("select * from cartuchos", (err, rows)=>{
            if(err)
                res.status(400).json({"error": err.message});
            else
                res.status(200).json({rows})
        })
    }catch(e){
        console.log("error >>>> \n" + e);
    }
})

router.post('/cartridges', async(req, res) =>{
    try{
        db.run(`insert into cartuchos values 
        (?, "${req.body.n_serie}", "${req.body.cart_model}", "${req.body.data_entrada}", 
        "${req.body.data_instala}", "${req.body.data_baixa}", "${req.body.data_entrega}", 
        "${req.body.imp_instalado}", "${req.body.cart_estado}", "${req.body.comentario}")`);
    }catch(e){
        console.log(e);
    }
})

module.exports = router;