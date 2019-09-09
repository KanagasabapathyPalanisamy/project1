const login =require('../models').login;
module.exports = {
    create(req,res){
        return login
        .create({
            name:req.body.name,
            password:req.body.password,
        })
        .then(login => res.status(201).send(login))
        .catch(error =>res.status(400).send(error));
    },
};