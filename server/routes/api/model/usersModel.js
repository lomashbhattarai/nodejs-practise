const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String } ,
    lastName: { type: String } ,
    userName: { type: String } ,
    email: { type: String } ,
    password: { type: String } ,
    createdAt: { type: Date, default: Date.now },
    books: [{
        name: { type: String } ,
        author: { type: String },
        status: { type: String},
        review: {
            rating: { type: Number },
            comment: { type: String }
        }
        }],
    friends: [{
        userName: { type: String },
        friendID: { type: String }
        }],
    notes:[{
        title: { type: String },
        description: { type: String },
        publish: { type: Boolean }
    }]
})

module.exports = mongoose.model('Users',userSchema)