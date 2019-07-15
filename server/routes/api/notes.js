
const express = require('express');
const Notes = require('./notesModel');
const router = express.Router();

router.get('/', (req,res) => {
    
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