const express = require('express');
const Users = require('./model/usersModel');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', (req, res) => {
    Users.find()
        .exec()
        .then(docs => res.status(200)
            .json(docs))
        .catch(err => res.status(500)
            .json(err))
})

router.get('/:userName', (req, res) => {
    Users.findOne({ userName: req.params.userName })
        .exec()
        .then(docs => res.status(200)
            .json(docs))
        .catch(err => res.status(500)
            .json(err))
})

router.post('/', (req, res) => {
    let user = new Users(req.body);
    user.save((err, user) => {
        console.log(err)
        if (err){
            return res.status(400).json(err)
        }
        return res.status(200)
    })
})

router.put('/:userName/:friend', (req, res) => {
    Users.findOne({ userName: req.params.friend}, (err, docs) => {
        if(err){
            console.log("something is wrong")
        } else {
            Users.findOneAndUpdate({ userName: req.params.userName },
                { $addToSet :{ friends: docs} },
                {new: true},
                (err,docs) => {
                    if (err) {
                        console.log("somthing is not right")
                        res.sendStatus(400)
                    }
                    res.send(docs)
                })
        }
    })
})

router.delete('/:userName/:friend', (req, res) => {
    Users.findOneAndUpdate({ userName: req.params.userName},
        {$pull : { friends: { userName: req.params.friend}}},
        {useFindAndModify: false},
        (err, docs) => {
            if(err) {
                console.log(err)
                res.sendStatus(400)
            }
            res.send(docs)
        }
    )
})


module.exports = router;