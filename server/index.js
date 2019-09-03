require('dotenv').config();
const Joi = require('joi');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');


const app = express();

const middleware = require('./middleware');

//MiddleWare
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
//app.use(express.json());


const posts = require('./routes/api/posts');
const books = require('./routes/api/books');
//const users = require('./routes/api/users');
const users = require('./routes/api/users_mongoose');
const notes = require('./routes/api/notes');
const email = require('./routes/api/emails/email');
const login = require('./routes/api/login');
const chatApi = require('./routes/api/chat');

app.use('/api/posts', posts);
app.use('/api/books', middleware.checkToken, books);
app.use('/api/users', users);
app.use('/api/notes', notes);
app.use('/api/email', email);
app.use('/api/login', login);
app.use('/api/chat',chatApi);

//handle production
if(process.env.NODE_ENV === 'production'){
  //static folder
  app.use(express.static(__dirname + '/public'));
  
  //handle SPA
  app.get(/.*/,(req,res) => res.sendFile(__dirname + '/public/index.html'));

}
const port = process.env.PORT || 3000;

/* 
app.post('/api/courses',(req, res) => {
  const schema = {
    name : Joi.string().min(3).required()
  };
  const result = Joi.validate(req.body, schema);
  if(result.error){
    res.status(400).send(result.error.details[0].message)
  } else{
    res.status(200).send(req.body)
  }
  
}) */

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://lomash:Godfather@hiup-hgarc.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true
      });
db= mongoose.connection
db.on('error',console.error.bind(console, 'connection error:'));

const Chats = require('./routes/api/model/chatModel');


db.once('open', () => {
  console.log('Connected to MongoDB');
  console.log(port)
  let server = app.listen(port, () => {
    console.log(`listening on port ${ port }`);
  });
  io = require('socket.io')(server);
  io.on('connection', function(socket) {
    socket.on('SEND', function(data) {
      let chat = new Chats(data); 
      chat.save((err, chat) => {
        if(err){
          console.log(err);
        }
      });
      io.emit("MESSAGE",data)
    });
  });


  
});


