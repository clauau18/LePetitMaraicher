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

const mongoose = require('mongoose');
const Vegetable = require('./models/vegetable');
const User = require('./models/user');

mongoose.connect('mongodb+srv://myuser:dauphine123@cluster0.ype3m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() =>{
        console.log("Successfully connected to DB!");
    })
    .catch((error) => {
       console.log("Unable to connect to DB!");
    });



app.get('/buying', (request, response) => {
   Vegetable.find((error, vegetables) => {
      if (error) return console.error(err);
      response.json(vegetables);
   });
   
});

app.get('/buying/:vegetable', (request, response) => {
   response.json({data:"get vegetables"})
});


app.post('/buying', (request, response) => {

   let requestVegetable = request.body;

   let newVegetable = new Vegetable({
      _id: requestVegetable._id,
      vegetableName:  requestVegetable.vegetableName,
      vegetablePrice: requestVegetable.vegetablePrice,
      vegetableQuantity: requestVegetable.vegetableQuantity
   });

   newVegetable.save((error, vegetable)=>{
      if (error) return console.error(err);
      console.log(vegetable)
      response.json(vegetable)
   });
});

app.put('/buying', (request, response) => {
   response.json({data:"PUT Modif vegetable"})
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








//GET /notes
app.get('/notes', (request, response) =>{
   Note.find((error, notes) => {
      if (error) return console.error(err);
      response.json(notes);
   });
});

//GET /notes/:id
app.get('/notes/:id', (request, response) =>{
   console.log(request.params.id);
   Note.findOne( { _id: request.params.id }, (error, note) => {
      if (error) {
         return response.status(404).json({error: error});
      }
      response.status(200).json(note);
   });
});

//POST /notes
app.post('/notes', (request, response) =>{
   let requestNote = request.body;
   let newNote = new Note({
      noteTitle: requestNote.noteTitle,
      noteText: requestNote.noteText,
      noteColor: requestNote.noteText
   });
   newNote.save((error, note) => {
      if (error) return console.error(err);
      console.log(note);
      response.json(note);
   })
});

//PUT /notes/:id
app.put('/notes/:id', (request, response) =>{
   let requestNote = request.body;
   let newNote = new Note({
      _id: request.params.id,
      noteTitle: requestNote.noteTitle,
      noteText: requestNote.noteText,
      noteColor: requestNote.noteText
   });
   Note.updateOne({_id:request.params.id}, newNote, (error, note) => {
      if (error) return response.status(400).json({error:error});
      response.status(201).json(note);
   });
});

//DELETE /notes/:id
app.delete('/notes/:id', (request, response) =>{
   Note.deleteOne({_id: request.params.id}, (error) => {
      if (error) return response.status(400).json({error:error});
      response.status(201).json({msg:'ok'});
   });
});



