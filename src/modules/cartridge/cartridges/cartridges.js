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

router.post('/cartridges', async(req, res)=>{
    try{
        // db.run(`insert into cartuchos values (?, '${req.body.}', '${req.body.}', '${req.body.}', '${req.body.}', '${req.body.}', '${req.body.}', '${req.body.}', '${req.body.}', '${req.body.}',)`)
    }
})

module.exports = router;