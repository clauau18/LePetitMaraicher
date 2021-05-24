const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    
    cnom: { type: String, required: true },
    cnum: { type: String, required: true }, 
    cmois: { type: String, required: true },
    cannee: { type: String, required: true },
    cvv: { type: String, required: true },
});

module.exports = mongoose.model('Payment', paymentSchema);