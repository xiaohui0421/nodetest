/**
 * Created by Administrator on 2014/6/16.
 */
var express = require('express');
var router = express.Router();

var User = require('../models/collName');

/* GET home page. */
router.get('/', function(req, res) {
        res.render('add', { title: 'ADD BLOG' });
});

router.post('/',function(req,res){
    var user1 = new User();
    user1.title= req.body.title;
    user1.content=req.body.content;

    user1.save(function (err, user) {
        if(!err) {
            res.render('add', { title: 'ADD BLOG Success' });
        }
        else
        {
            res.send('respond with a resource'+err);
        }
    });

});

module.exports = router;
