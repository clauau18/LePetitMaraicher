const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
    
    login: { type: String, required: true },
    adresse: { type: String, required: true }, 
    codepostal: { type: String, required: true },
    ville: { type: String, required: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    type: {type:Boolean, required: false}
});

module.exports = mongoose.model('User', loginSchema);
