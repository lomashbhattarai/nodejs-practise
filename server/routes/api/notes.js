
const express = require('express');
const Notes = require('./notesModel');
const router = express.Router();

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

module.exports = router;