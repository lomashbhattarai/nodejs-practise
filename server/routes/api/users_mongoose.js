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

module.exports = router;