const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const cors = require('cors');
var Strategy = require('passport-local').Strategy;
var loginController=require('./controllers').login;
const player =require('./models').player;

const app = express();
// view engine setup
app.use(logger('dev'));           //every-reques to console
app.use(bodyParser.json());       //Parse incoming request bodies in a middleware before your handlers -this is under req.body property
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
//models
var models=require("./models");
//sync Database
models.sequelize.sync().then(function(){
    console.log('DB connected...');
}).catch(function(err){
    console.log(err,"SOMETHING went wrong with the DB!!!");
});
//Routers 
//require('./routers')(app)
app.get('./routers',(req,res) => res.status(200).send ({
    message:'welcome to the beginning.',
}));
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('../backend/config/passport');
passport.use(new Strategy(
    function(username, password, cb) {
      db.users.findByUsername(username, function(err, user) {
        if (err) { return cb(err); }
        if (!user) { return cb(null, false); }
        if (user.password != password) { return cb(null, false); }
        return cb(null, user);
      });
    }));
    //app.use(require('morgan')('combined'));
    app.use(passport.initialize()); //middleware that asscess to req and res  of the objects
   
    app.use(function(req, res, next) {      // next -is used to retrive back the responce from the middleware
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
  app.post('/api/login',  passport.authenticate('local', { failureRedirect: '/loginfailure' ,session:false}),
    function(req, res) {
      res.end(JSON.stringify({success:true}));
   });
   app.get('/loginfailure',(req,res)=>res.end(JSON.stringify({success:false})));

   var listener = app.listen(8888, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});
app.post('/api/create',loginController.create);
app.post('/api/players',(req,res)=>{
  player.findAll().then(function(players){
    res.send(players);
  }).catch(function(err)
  {
    res.send(JSON.stringify({success:false}));
  })
  });
module.exports = app;








