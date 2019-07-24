const express = require('express');
const userRoutes = express.Router();
var nodemailer = require("nodemailer");

//require user model in our routes

let User = require('./user.model');
let Login =require('./login.model');

//defined store route

userRoutes.route('/adduser').post(function (req, res) {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'User Register Successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save database");
        });

});

userRoutes.route('/').get(function (req, res) {
    User.find(function(err, user){
        if(err){
            console.log(err);
        }
        else {
            res.json(user);
        }
    });
});

userRoutes.route('/loginvalidate/:email').get(function (req, res) {
    let id = req.params.email;
    User.findById( req.params.email, function (err, user){
        res.json(user);
    });
});
//user login details


// Defined edit route
userRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    User.findById(id, function (err, user){
        res.json(user);
    });
});

//  Defined update route
userRoutes.route('/update/:id').post(function (req, res) {
    User.findById(req.params.id, function(err, user) {
        if (!user)
            res.status(404).send("data is not found");
        else {
        

            user.name = req.body.name;
            user.email = req.body.email;
            user.passwrd = req.body.passwrd;
            user.pass = req.body.pass;
            user.addrs = req.body.addrs;
            user.save().then(user => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
userRoutes.route('/delete/:id').get(function (req, res) {
    User.findByIdAndRemove({_id: req.params.id}, function(err, user){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

//send email
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
  userRoutes.route('/senduser').post(function(req,res){
  
    var mailOptions={
        to : req.body.uemail,
        subject : "User SingUp",
        text : "Registered Successfully"
  
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

module.exports = userRoutes;