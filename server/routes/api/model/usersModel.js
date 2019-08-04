const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required: true 
    } ,
    lastName: { 
        type: String,
        required: true 
    } ,
    userName: { 
        type: String, 
        unique: true,
        required: true,
        trim: true
    } ,
    email: { 
        type: String,
        unique: true,
        required: true,
        trim: true

    } ,
    password: { 
        type: String,
        required: true 
    } ,
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
        userName: { 
            type: String,
            unique: true 
        },
        friendID: { 
            type: String,
            unique:true 
        }
        }],
    notes:[{
        title: { type: String },
        description: { type: String },
        publish: { type: Boolean }
    }]
})

userSchema.pre('save', function(next){
    var user = this;
    bcrypt.hash(user.password, 10, function(err,hash){
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    })
});

module.exports = mongoose.model('Users',userSchema)