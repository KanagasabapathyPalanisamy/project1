var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('../passport');
passport.use(new Strategy(
    function(username, password, cb) {
      db.users.findByUsername(username, function(err, user) {
        if (err) { return cb(err); }
        if (!user) { return cb(null, false); }
        if (user.password != password) 
        { 
          return cb(null, false); 
        }
        return cb(null, user);
      });
    }));