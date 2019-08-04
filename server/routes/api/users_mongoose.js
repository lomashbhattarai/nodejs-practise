const express = require('express');
const Users = require('./model/usersModel');
const router = express.Router();

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
            console.log("somethign is wrong")
        } else {
            console.log(docs)
            Users.findOneAndUpdate({ userName: req.params.userName },
                { $addToSet :{ friends: docs} },
                {new: true},
                (err,docs) => {
                    if (err) {
                        console.log("somthing is not right")
                    }
                    res.send(docs)
                })
        }
    })
})


module.exports = router;