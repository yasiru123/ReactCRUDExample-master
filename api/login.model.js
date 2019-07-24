const mongoose = require('mongoose');
const Schema1 = mongoose.Schema;


let Login = new Schema1({
    email: {
        type: String
    }

}, {
        collection: 'login'
    });

module.exports = mongoose.model('Login', Login);