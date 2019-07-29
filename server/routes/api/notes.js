
const express = require('express');
const Notes = require('./notesModel');
const router = express.Router();
const User = require('./model/usersModel')

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
    User.findOne( { userName : req.params.username}, (err, docs) => {
        let newNote = {
            title: req.body.title,
            description: req.body.description,
            publish: req.body.publish
        }
        if( docs.notes) {
            docs.notes.push(newNote)
            docs.save((err) => {
                console.log(err)
            })
            res.send(docs)
        } else {
            docs.notes = []
            console.log("user found",newNote)
            docs.notes.push(newNote)
            docs.save((err) => {
                console.log(err)
            })
            res.send(docs)
        }


        
    }) 

})

module.exports = router;