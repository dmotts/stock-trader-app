var express = require('express');
var Data = require('./models/Data');
var router = express.Router();

router.get('/', function(req, res){
  res.send('success');
});

router.get('/seed', function(req, res) {
    Data.create({}, function(err, data) {
        if (err) { 
            console.log(err)
            res.status(401).send(err);
        } else {
            console.log(data);
            res.status(200).json(data);
        }
    });
});

module.exports = router;