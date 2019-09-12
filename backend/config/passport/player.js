const player =require('../../models').player;

exports.findByUsername = function(username, cb) {   //current user name
  player.findAll().then(function(users){            //login table it fetches all datas
    var playerRecord=users;                         // the "record" contains all user list from the login table
 
}).catch(function(err)
{
console.log(err);
});
}
