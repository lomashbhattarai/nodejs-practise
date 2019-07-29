const express = require('express');
const Users = require('./model/usersModel');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');

function jwtSignUser (user) {
    const ONE_WEEK = 60* 60 *24 * 7;
    var token = jwt.sign(user,config.authentication.jwtSecret, {
      expiresIn: "12h"
    })
    console.log(token)
    return token
  
  }

router.post('/', (req, res) => {
    const userName = req.body.userName
    const password = req.body.password
   
    Users.findOne({ userName }, (err, user) => {

        if(!user) {
            return res.status(404).send(err)
        }
        bcrypt.compare(password, user.password).then((response) => {
            console.log(response)
            if(response){
                const { userName, password } = user;
                console.log(userName, password)
                var userJson = {
                    userName,
                    password
                };
                console.log(userJson);
                return res.status(200).send({
                    status: true,
                    user,
                    token: jwtSignUser(userJson)
                })
            } 
            return res.status(403).json({status:false}) 
        }).catch((err) => {
            return res.status(500).json({status:"hello"});
        })
    })
})


module.exports = router
