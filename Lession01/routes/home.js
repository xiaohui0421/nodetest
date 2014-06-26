/**
 * Created by Administrator on 2014/6/10.
 */
var express=require('express');

var router=express.Router();


router.get('/*',function(req,res){
    res.render('index', { title: 'Home Express'+req.params['name']});
})

module.exports = router;

