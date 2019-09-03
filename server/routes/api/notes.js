
const express = require('express');
const Notes = require('./model/notesModel');
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
    let newNote = {
        title: req.body.title,
        description: req.body.description,
        publish: req.body.publish
    }
    let feedPost = {
        title: req.body.title,
        description: req.body.description,
        postedBy: req.params.username
    }

    User.findOneAndUpdate( { userName : req.params.username}, { $push: { notes: newNote, feed: feedPost} }, {new: true}, (err, docs) => {
        if(err){
            return res.status(400).json({error: err})
        } 
        docs.friends.map( (friend) => {
            User.findOneAndUpdate( { userName: friend.userName}, { $push: {feed: feedPost}},{new: true}, (err, docs) => {
                if(err){
                    return res.status(400).json({error: err})
                }
                console.log("feed");
                console.log(docs);

            })
        })       
        res.send(docs)
    }) 

})

module.exports = router;