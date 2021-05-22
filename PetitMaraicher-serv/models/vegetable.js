const mongoose = require('mongoose');

const vegetableSchema = mongoose.Schema({
    vegetableId: { type: Integer, required: true },
    vegetableName: { type: String, required: true },
    vegetablePrice: { type: Integer, required: true },
    vegetableQuantity: { type: Integer, required: true }

});

module.exports = mongoose.model('Vegetable', vegetableSchema);
