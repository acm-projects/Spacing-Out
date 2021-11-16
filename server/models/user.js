const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        default: ""
    },
    password: {
        type: String,
        required: false,
        default: ""
    }
});


module.exports = mongoose.model('User', userSchema);