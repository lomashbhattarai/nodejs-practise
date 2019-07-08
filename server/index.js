require('dotenv').config();
const Joi = require('joi');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//MiddleWare
app.use(bodyParser.json());
app.use(cors());
//app.use(express.json());


const posts = require('./routes/api/posts');
app.use('/api/posts',posts);

//handle production
if(process.env.NODE_ENV === 'production'){
  //static folder
  app.use(express.static(__dirname + '/public'));
  
  //handle SPA
  app.get(/.*/,(req,res) => res.sendFile(__dirname + '/public/index.html')));

}

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('\n\nHello, yuuuu!\n\n');
});

app.get('/api/courses',(req,res) => {
  res.send([1,2,3]);
});
app.get('/api/courses/:id/',(req,res) => {
  
  if(req.params.id == 1){
    res.send(req.params.id)
  } else {
    res.status(404).send('we have only one course.')
  }
})
 
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
  
})

app.listen(port, () => {
  console.log(`listening on port ${ port }`);
});