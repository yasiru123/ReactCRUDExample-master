// business.route.js

const express = require('express');
const trainRoutes = express.Router();
var nodemailer = require("nodemailer");

const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: 'd04f140e',
  apiSecret: 'hgQ4yC3HxFNUzXZ8'
})

//Send sms
trainRoutes.post('/send', (req, res) => {
const from = 'Online_Train'
const text ='Your reservation Succeeded with ID:' +req.body.nic

//nexmo.message.sendSms(from, to, text)
nexmo.message.sendSms(
      '94777674512', req.body.number, text, {type: 'unicode'},
       (err, responseData) => {if (responseData) {console.log(responseData)}}
    );
});
// Require train model 
let Train = require('./trains.model');


// add Train details
trainRoutes.route('/add').post(function (req, res) {
  let train = new Train(req.body);
  train.save()
    .then(train => {
      res.status(200).json({'train': 'Train in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});




// get available trains
trainRoutes.route('/:startstation/:endstation').get(function (req, res) {
  let startstation1= req.params.startstation;
  let endstation1 = req.params.endstation;


    Train.find({startstation:req.params.startstation, endstation:req.params.endstation}, function (err, train){
      res.json(train);
  });
});

//get Selected train
trainRoutes.route('/:id').get(function (req, res) {


    Train.findById(req.params.id, function (err, train){
        res.json(train);
    });
});

//  Defined update route
trainRoutes.route('/update/:id').post(function (req, res) {
    Train.findById(req.params.id, function(err, train) {
    if (!train)
      res.status(404).send("data is not found");
    else {
      train.qty = req.body.qty;



      train.save().then(train => {
          res.json('Update complete');

        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
})



// Defined delete | remove | destroy route
trainRoutes.route('/delete/:id').get(function (req, res) {
    Train.findByIdAndRemove({_id: req.params.id}, function(err, train){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});
 


var smtpTransport = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
      user: 'whystack@gmail.com',
      pass: 'Motaiya@123?'
  },
  tls: {rejectUnauthorized: false},
  debug:true

}
);
//send email
trainRoutes.route('/send1').post(function(req,res){

  var mailOptions={
      to : req.body.email,
      subject : "Yout Train Ticket Reservation",
      text : "Your Reservation Completed by ID  :"+req.body.nic

  }

  console.log("start");

  console.log(mailOptions);



  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
          console.log(error);
          res.end("error");
      }else{
          console.log("Message sent: " + response.message);
          res.end("sent");
      }
  });
});


module.exports = trainRoutes;
