/**
 * Created by Administrator on 2014/6/11.
 */

var settings=require('settings.js');
var Db=require('mongodb').Db;
var Connection=require('mongodb').Connection;
var Server=require('mongodb').Server;

module.exports=new Db(settings.db,new Server(settings.host,Connection.DEFAULT_PORT,{}));
