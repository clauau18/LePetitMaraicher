const mongoose = require('mongoose');

const vegetableSchema = mongoose.Schema({
    _id: { type: Number, required: true },
    vegetableName: { type: String, required: true },
    vegetablePrice: { type: Number, required: true },
    vegetableQuantity: { type: String, required: true },
    image: {data: Buffer, contentType: String}
});

module.exports = mongoose.model('Vegetable', vegetableSchema);
