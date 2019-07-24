const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define the collection and schema for trains

let User = new Schema({
    ufirstname: {
        type: String
    },
    ulastname: {
        type: String
    },
    uemail: {
        type: String
    },
    upassword: {
        type: String
    },
    utype: {
        type: String
    },
    
},{
    database: 'sliit-af',
    collection: 'userDetails'
});

module.exports = mongoose.model('User', User);