
const express = require('express');
const Notes = require('./notesModel');
const router = express.Router();
const User = require('./model/usersModel');
const mongoose = require('mongoose');
router.get('/', (req, res) => {
    Notes.find()
        .exec()
        .then(docs => res.status(200)
            .json(docs))
        .catch(err => res.status(500)
            .json(err))

    
})

router.post('/', (req, res) => {
    let note = new Notes(req.body);
    note.save((err,note)=>{
        if(err){
            return res.status(400).json(err)
        }
        res.status(200).json(note)
    })
})

router.put('/:username', (req,res) => {
    let newNote = {
        title: req.body.title,
        description: req.body.description,
        publish: req.body.publish
    }
    console.log(newNote)
    User.findOneAndUpdate( { userName : req.params.username}, 
        { $push: { notes: newNote} }, {new: true}, (err, docs) => {
        if(err){
            console.logbody("something is not right")
        }
        
        res.send(docs)
    }) 

})

router.put('/:userName/:noteId', (req, res) => {
    User.findOneAndUpdate( { userName: req.params.userName }, 
        {  $pull: { notes: { _id: mongoose.Types.ObjectId(req.params.noteId) }}},
        {useFindAndModify: false},
        (err, docs) => {
        if(err) {
            console.log(err)
        }
        res.sendStatus(204)
    })
})

module.exports = router;