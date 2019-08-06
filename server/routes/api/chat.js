const express = require('express');
const Chats = require('./model/chatModel');
const router = express.Router();

router.get('/', (req,res) => {
    Chats.find({}, (err, docs) => {
        if(err) {
            res.status(500).json(err);
        }
        console.log(docs.slice(docs.length-10,docs.length))
        res.status(200).json(docs);
    });
});

module.exports = router;




