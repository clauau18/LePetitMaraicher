const express = require('express');
const session = require('express-session');
const app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

const mongoose = require('mongoose');
const User = require('./models/user');
const { resourceLimits } = require('node:worker_threads');

mongoose.connect('mongodb+srv://myuser:dauphine123@cluster0.ype3m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
 .then(() => {
    console.log('Successfully connected to DB!');
})
 .catch((error) => {
     console.log('Unable to connect to DB!');
     console.error(error);
});
app.use(cors({credentials: true, origin: 'http://localhost:4200'}));

/*app.use((request, response, next) => {
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Origin', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.set('Access-Control-Allow-Origin', 'X-Requested-With, content-type');
    response.set('Access-Control-Allow-Origin', true);
    next();
});*/


app.use((request, response, next) => {
    next();
});

app.use(bodyParser.urlencoded({extended :true}));
app.use(bodyParser.json());
app.use(session({secret:"mySecretKey", cookie:{maxAge: 24 * 60 * 60 * 1000}}));
/*let users = [];

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
*/

//Login
app.post('/connexion', (request, response) => {
    User.findOne({login: resourceLimits.body.login, password:request.body.password}, (error, user) => {
        if(error) return response.status(401).json({msg:"Error"});
        if(!user) return response.status(401).json({msg:"Wrong login"});
        request.session.userId = user.id;
        response.status(200).json({login: user.login, password: user.password});
    });
});

//Register
app.post('/signup', (request, response) => {
    var newUser = new User({
        login:request.body.login,
        password:request.body.password,
        fullName:request.body.fullName,
    });
    User.countDocuments({login: newUser.login}, function(err, count) {
        if(err) return response.status(401).json({msg:"Error"});
        if(count>0) {
            return response.status(409).json({msg:"This login already exists"});
        }
        else{
            newUser.save((error, user) => {
                if(error) return console.error(err);
                request.session.userId = user._id;
                response.status(200).json({login: user.login, fullName: user.fullName});
            });
        }
    });
});

//Logout
app.get('/logout', (request, response) => {
    request.session.destroy(error=> {
        if(error) return response.status(409).json({msg:"error"});
        response.status(200).json({msg:"Logout Ok"});
    });
});

//isLogged
app.get('/islogged', (request, response) => {
    if(!request.session.userId) return res.status(401).json();
    
    User.findOne({_id: request.session.userId}, (error, user) => {
        if(error) return response.status(401).json({msg:"Error"});
        if(!user) return response.status(401).json({msg:"Error"});
        request.session.userId = user._id;
        response.status(200).json({login: user.login, fullName:user.fullName})
    });
});

app.listen(3000, () => {console.log("Listening on port 3000")});
