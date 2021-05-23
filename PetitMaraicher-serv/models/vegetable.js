const mongoose = require('mongoose');

const vegetableSchema = mongoose.Schema({
    vegetableName: { type: String, required: true },
    vegetablePrice: { type: Number, required: true },
    vegetableQuantity: { type: String, required: true },
    image: {data: Buffer, contentType: String}
});

module.exports = mongoose.model('Vegetable', vegetableSchema);
