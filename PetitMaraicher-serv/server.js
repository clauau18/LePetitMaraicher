const express = require('express');
const session = require('express-session');
const app = express();

app.listen(3000, ()=>{console.log("Listening on port 3000")});

var cors = require('cors');
var bodyParser = require('body-parser');

app.use((req, res, next) => {
   res.set('Access-Control-Allow-Origin', '*');
   res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   res.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
   res.set('Access-Control-Allow-Credentials', true);
   next();
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
let vegetables = [];
let users = [];

const mongoose = require('mongoose');
const Vegetable = require('./models/vegetable');
const User = require('./models/user');
const Payment = require('./models/payment');


mongoose.connect('mongodb+srv://myuser:dauphine123@cluster0.ype3m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() =>{
        console.log("Successfully connected to DB!");
    })
    .catch((error) => {
       console.log("Unable to connect to DB!");
    });


app.get('/admin/users', (request, response) => {
   User.find((error, users) => {
      if (error) return console.error(err);
      response.json(users);
   });
   
});

// Get 1 vegetable par son ID
app.get('/admin/users/:id', (request, response) =>{
   console.log("AAAAAAAAAAAAA"+request)
   console.log("BBBBBBBBBBBB"+response)
   User.findOne( {_id: request.params.id}, (error, user) => {
      if (error) {
         return response.status(404).json({error: error});
      }
      response.status(200).json(user);
   });
});

// a enlever on l'a fait dans le signup 
app.post('/admin/users', (request, response) => {

   let requestUser = request.body;
   //console.log(request.body);

   let newUser = new User({
      login: requestUser.login,
      adresse: requestUser.adresse,
      codepostal: requestUser.codepostal,
      ville: requestUser.ville,
      password: requestUser.password,
      fullname: requestUser.fullName
   });

   newUser.save((error, user)=>{
      if (error) return console.error(err);
      response.json(user)
   });
});

app.put('/admin/users/:id', (request, response) => {
   let requestUser = request.body;

   let newUser = new User({
      _id: request.params.id,
      login: requestUser.login,
      adresse: requestUser.adresse,
      codepostal: requestUser.codepostal,
      ville: requestUser.ville,
      password: requestUser.password,
      fullname: requestUser.fullName
   });

   User.updateOne({_id:request.params.id}, newUser, (error, user) => {
      if (error) return response.status(400).json({error:error});
      response.status(201).json(user);
   });
});

app.delete('/admin/users/:id', (request, response) =>{
   User.deleteOne({_id: request.params.id}, (error) => {
      if (error) return response.status(400).json({error:error});
      response.status(201).json({msg:'ok'});
   });
});

app.get('/buying', (request, response) => {
   Vegetable.find((error, vegetables) => {
      if (error) return console.error(err);
      response.json(vegetables);
   });
   
});


// Get 1 vegetable par son ID
app.get('/buying/:id', (request, response) =>{
   Vegetable.findOne( {_id: request.params.id}, (error, vegetable) => {
      if (error) {
         return response.status(404).json({error: error});
      }
      console.log("SERVERJSSSSSSSSSSSSSSS3"+vegetable)
      response.status(200).json(vegetable);
   });
});


app.post('/buying', (request, response) => {

   let requestVegetable = request.body;

   let newVegetable = new Vegetable({
      vegetableName:  requestVegetable.vegetableName,
      vegetablePrice: requestVegetable.vegetablePrice,
      vegetableQuantity: requestVegetable.vegetableQuantity
   });

   newVegetable.save((error, vegetable)=>{
      if (error) return console.error(err);
      response.json(vegetable)
   });
});

app.put('/buying/:id', (request, response) => {
   let requestVegetable = request.body;

   let newVegetable = new Vegetable({
      _id: request.params.id,
      vegetableName:  requestVegetable.vegetableName,
      vegetablePrice: requestVegetable.vegetablePrice,
      vegetableQuantity: requestVegetable.vegetableQuantity
   });

   Vegetable.updateOne({_id:request.params.id}, newVegetable, (error, vegetable) => {
      if (error) return response.status(400).json({error:error});
      response.status(201).json(vegetable);
   });
});


app.delete('/buying/:id', (request, response) =>{
   Vegetable.deleteOne({_id: request.params.id}, (error) => {
      if (error) return response.status(400).json({error:error});
      response.status(201).json({msg:'ok'});
   });
});


/*app.use((req, res, next) => {
   next();
});*/

app.use(cors({credentials: true, origin: 'http://localhost:4200'}));
app.use(session({secret:"mySecretKey", cookie:{maxAge: 24 * 60 * 60 * 1000}}));


//login
app.post('/connexion', (request, response) => {
   User.findOne({login: request.body.login, password: request.body.password }, (error, user) => {
      if (error) return response.status(401).json({msg: 'Error'});
      if (!user) return response.status(401).json({msg: 'Wrong login'});
      request.session.userId = user._id;
      response.status(200).json({login: user.login, fullName: user.fullName});
   });
});

//register
app.post('/signup', (request, response) => {
   var newUser = new User({
      login: request.body.login,
      adresse: request.body.adresse,
      codepostal: request.body.codepostal,
      ville: request.body.ville,
      password: request.body.password,
      fullName: request.body.fullName

   })
   User.countDocuments({login: newUser.login }, function(error, count){
      if (error) return response.status(401).json({msg: 'Error'});
      if (count>0){
         return response.status(409).json({msg: 'This login already exists'});
      }
      else {
         newUser.save((error, user)=>{
            if(error) return console.error(err);
            request.session.userId = user._id;
            response.status(200).json({login: user.login, fullName: user.fullName});
         });
      }
   });
});

//logout
app.get('/logout', (request, response) => {
   request.session.destroy(error => {
      if(error) return response.status(409).json({msg: 'error'});
      response.status(200).json({msg: 'Logout OK'});
   })
})

app.get('/islogged', (request, response) => {
   if(!request.session.userId) return response.status(401).json();

   User.findOne({_id: request.session.userId}, (error, user) => {
      if (error) return response.status(401).json({msg:'Error'});
      if (!user) return response.status(401).json({msg:'Error'});
      request.session.userId = user._id;
      response.status(200).json({login: user.login, fullName: user.fullName});
   })
})


//payment
app.post('/payment', (request, response) => {
   var newPayment = new Payment({
      cnom: request.body.cnom,
      cnum: request.body.cnum,
      cmois: request.body.cmois,
      cannee: request.body.cannee,
      cvv: request.body.cvv

   })

   newPayment.save((error, payment)=>{
      if (error) return console.error(err);
      console.log(payment)
      response.json(payment)
   });

});


