var mongoose = require("mongoose");

var DataSchema = mongoose.Schema({
    funds: Number,
    stockPortfolio: [{
        id: String,
        name: String,
        price: Number,
        quantity: Number
    }],
    stocks: [{
        id: String,
        name: String,
        price: Number
    }]
});

module.exports = mongoose.model('Data', DataSchema);