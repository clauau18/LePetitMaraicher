const mongoose = require('mongoose');

const vegetableSchema = mongoose.Schema({
    vegetableId: { type: Number, required: true },
    vegetableName: { type: String, required: true },
    vegetablePrice: { type: Number, required: true },
    vegetableQuantity: { type: Number, required: true }

});

module.exports = mongoose.model('Vegetable', vegetableSchema);
