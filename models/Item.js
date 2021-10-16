const { model, Schema } = require('mongoose');

const itemSchema = new Schema({
    itemName: String,
    itemPrice: String,
    itemDescription: String,
});

module.exports = model('Item', itemSchema);