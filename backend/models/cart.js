const mongoose = require('mongoose');
// var db = require('../config/mongoose');

const cartSch = new mongoose.Schema({
    
    cat_name:{
         type: String,
         required: true
    }

},{timestamps: true});

const Cart = mongoose.model('food_carts',cartSch);
module.exports = Cart;
 
 
 
 