const express = require('express');
const Users = require('./model/usersModel');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/', (req, res) => {
    const userName = req.body.userName
    const password = req.body.password
    Users.findOne({ userName }, (err, user) => {
        if(!user) {
            return res.status(404).send(err)
        }
        bcrypt.compare(password, user.password).then((response) => {
            if(response){
                return res.status(200).send({status: true,user})
            } 
            return res.status(403).json({status:false}) 
        }).catch((err) => {
            return res.status(500).json({status:err});
        })
    })
})


module.exports = router
