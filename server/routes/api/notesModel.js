const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    title: { type: String },
    description: {type: String},
    public: {type: Boolean },
    userId: {type: String }
});

module.exports = mongoose.model('Notes',notesSchema)