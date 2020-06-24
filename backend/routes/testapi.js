var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1305",
  database: "world"
});
con.connect();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('backend is responding with a resource');
});

router.get('/category', function(req, res, next) {
  con.query('select * from world.city', function (error, results, fields) {
    if (error) throw error;
    //console.log(results);
   
    res.send(results);
});
});
router.get('/All', function(req, res, next) {
  con.query('select * from world.city', function (error, results, fields) {
    if (error) throw error;
    //console.log(results);
   
    res.send(results);
});
});
router.get('/Options', function(req,res,next){
  con.query('select distinct CountryCode from world.city',function(error,results,fields){
    if(error) throw error;
    res.send(results);
    });
});
router.get('/Order', function(req, res, next) { 
    res.send('Order Completed');
});



router.get('/:id', function(req, res, next) {
  console.log(req.params.id);
  var countrycode=req.params.id.toString();
  var query='select * from world.city where CountryCode="'+countrycode+'"';
  con.query(query, function (error, results, fields) {
    if (error) throw error;
    //console.log(results);
   
    res.send(results);
});
});


module.exports = router;
