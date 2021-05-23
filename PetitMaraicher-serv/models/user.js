const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
    
    fullName: { type: String, required: true },
    login: { type: String, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('User', loginSchema);
