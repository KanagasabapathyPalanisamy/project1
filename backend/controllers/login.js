const login =require('../models').login;
module.exports = {
    create(req,res){
        return login
        .create({
            name:req.query.username,
            password:req.query.password,
        })
        .then(login => res.status(201).send(JSON.stringify({signup:true})))   //201 is "created" status
        .catch(error =>res.status(400).send(JSON.stringify({signup:false})));  //400 is "request-error" status
    },
}; 