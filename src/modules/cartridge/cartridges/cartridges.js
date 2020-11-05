const expess = require('express');
const db = require('../../../Db/dbConnection');
const router = expess.Router();
const date = new Date();
const dateNow = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}-${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

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
        db.run(`insert into cartuchos values (?, "${req.body.n_serie}", "${dateNow.toString()}", "", "${req.body.cart_model}","", "", "${req.body.cart_estado}", "${req.body.comentario}")`, 
        (err)=>{
            if(err)
                res.status(400).json({"error": err.message});
            else
                res.status(200).json("incluido com sucesso");
        });
    }catch(e){
        console.log("error >>>> \n" + e);
    }
});

router.post('/updateCartridge', async(req, res) =>{
    try{
        let body = req.body;
        let query = 'update cartuchos set '
        query += body.n_serie ? `n_serie =  '${body.n_serie}'` : "";
        query += body.data_baixa ? `data_baixa =  '${body.data_baixa}'` : "";
        query += body.cart_model ? `cart_model =  '${body.cart_model}'` : "";
        query += body.data_instalacao ? `data_instalacao =  '${body.data_instalacao}'` : "";
        query += body.imp_instalado ? `imp_instalado =  '${body.imp_instalado}'` : "";
        query += body.cart_estado ? `cart_estado =  '${body.cart_estado}'` : "";
        query += body.comentario ? `comentario =  '${body.comentario}'` : "";
        query += `where ID = ${body.id}`

        db.run(query, (err) =>{
            if(err)
                res.status(400).json({"error": err.message});
            else
                res.status(200).json("atualizado com sucesso");
        })
    }catch(e){
        console.log("error >>>> \n" + e)
    }
})

module.exports = router;