const express = require('express');
const app = express();
var bodyParser = require('body-parser');

const mongoose = require('mongoose');
const User = require('./models/user');
mongoose.connect('mongodb+srv://user:dauphine123@cluster0.rdmem.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
 .then(() => {
    console.log('Successfully connected to DB!');
})
 .catch((error) => {
     console.log('Unable to connect to DB!');
     console.error(error);
});

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Origin', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.set('Access-Control-Allow-Origin', 'X-Requested-With, content-type');
    res.set('Access-Control-Allow-Origin', true);
    next();
});

app.use((req, res, next) => {
    next();
});

app.use(bodyParser.urlencoded({extended :true}));
app.use(bodyParser.json());

let users = [];

//GET /users ???????????????   /users   ???????????????
app.get('/users', (request, response) => {
    Note.find((error, users) => {
        if(error) return console.error(err);
        response.json({users});
    });
});

//POST /users ???????????????   /users   ???????????????
app.post('/users', (request, response) => {
    let requestUser = request.body;
    let newUser = new User({
        userNom : requestUser.userNom,
        userPrenom : requestUser.userPrenom,
    });

    newUser.save((error, user) => {
        if(error) return console.error(err);
        console.log(note);
        response.json(note);
    });

});

//GET /produit/:id ???????????????   /users   ???????????????
app.get('/users/:id', (request, response) => {
    console.log(request.params.id)
    User.findOne({_id: request.params.id}, (error, note) => {
        if(error) {
            return response.status(404).json({error: error});
        }
        response.status(200).json(user);
    });  
});

//POST /produit/:id ???????????????   /users   ???????????????
app.post('/users', (request, response) => {
    response.json({data:"POST user:id entry"})
});

//PUT /produit/:id ???????????????   /users   ???????????????
app.put('/users', (request, response) => {
    response.json({data:"PUT user:id entry"})
});

//DELETE /produit/:id ???????????????   /users   ???????????????
app.delete('/users', (request, response) => {
    response.json({data:"get user:id entry"})
});

app.listen(3000, () => {console.log("Listening on port 3000")});
