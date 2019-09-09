const loginController = require('../controllers').login;
module.export =(app) =>{
    app.get('/api',(req,res) => res.status(200).send ({
        message:'connected successfully',
    }));
app.post('/api/login',loginController.create);
};