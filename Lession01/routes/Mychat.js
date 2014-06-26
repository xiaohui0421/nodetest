/**
 * Created by Administrator on 2014/6/19.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.render('chat', { title: 'Express'});
});

module.exports = router;
