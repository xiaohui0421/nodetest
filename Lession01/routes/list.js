/**
 * Created by Administrator on 2014/6/16.
 */
var express = require('express');
var router = express.Router();

var User = require('../models/collName');

/* GET home page. */
router.get('/', function(req, res) {
    User.find({}, function (err,users) {
        res.render('list', { title: 'Blog List',users:users });

    });
    /*
     var user1 = new User();
     user1.title="My Blog";
     user1.content=" This is Content";

     user1.save(function (err, user) {
     if(!err) {
     console.log(user);

     }
     });
     **/
});

module.exports = router;
