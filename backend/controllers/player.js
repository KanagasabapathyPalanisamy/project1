const player =require('../models').player;
module.exports = {
    create(req,res){
        return player
        .create({
            name:req.query.player,
            position:req.query.position,
        })
        .then(player => res.status(201).send(JSON.stringify({success:true})))   
        .catch(error =>res.status(400).send(JSON.stringify({success:false})));  
    },
}; 
