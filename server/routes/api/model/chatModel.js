const mongoose = require('mongoose');
const chatSchema = new mongoose.Schema({
    userName: {
        type:String,
        required: true
    },
    message: {
        type: String,
    }
});

module.exports = mongoose.model('Chat',chatSchema);