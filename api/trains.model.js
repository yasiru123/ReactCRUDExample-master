const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Train = new Schema({
  trainno: {
    type: String
  },
  trainname: {
    type: String
  },
  startstation: {
    type: String
  },

  endstation: {
    type: String
  },
  starttime: {
    type: String
  },
  endtime: {
    type: String
  },

  traintype: {
    type: String
  },
  frequency: {
    type: String
  },

  from: {
    type: String
  },
  to:{
    type:String
  },
      
  qty: {
    type: String
  },

  price: {
    type: String
  }
},

    {
    collection: 'train'
});

module.exports = mongoose.model('Train', Train);