const { urlencoded } = require('express');
const { model, Schema } = require('mongoose');

const itemSchema = new Schema({
    itemName: String,
    itemPrice: String,
    itemDescription: String,
    itemImg: String,
    itemType: String,
});

module.exports = model('Item', itemSchema);