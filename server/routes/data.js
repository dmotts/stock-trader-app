var express = require('express');
var Data = require('../models/Data');
var router = express.Router();

router.get('/', function(req, res){
  Data.findOne({}, function(err, data) {
      if (err) { 
            console.log(err)
            res.status(401).send(err);
        } else {
            console.log(data);
            res.status(200).json(data);
        }
  })
});

router.put('/', function(req, res) {
    Data.update({}, {
        $set: {
            funds: req.body.funds,
            stockPortfolio: req.body.stockPortfolio,
            stocks: req.body.stocks
        }
    }, {}, function(err, data) {
        if(err) {
            console.log(err);
            res.status(401).send(err);
        } else {
            console.log('Data updated:', data);
            res.status(200).json(data);
        }
    });
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