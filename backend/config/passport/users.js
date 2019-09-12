const login =require('../../models').login;

exports.findByUsername = function(username, cb) {   //current user name
  login.findAll().then(function(users){              //login table it fetches all datas
    var records=users;                               // the "record" contains all user list from the login table
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.name === username) {                 //record.name willbe checked every time 
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}).catch(function(err)
{
console.log(err);
});
}
