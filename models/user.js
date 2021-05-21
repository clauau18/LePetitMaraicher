const mongoose = require('mongoose');

const produitSchema = mongoose.Schema({
    username : {type : String, required:true},
    nom :  {type : String, required:true},
    prenom :  {type : String, required:true},
    password :  {type : String, required:true}
});

module.exports = mongoose.model('User', userSchema);
