var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware/index.js"); 

//main page
router.get("/", function (req, res) {
    res.render("main", {currentUser:''});

  
});

//  ================
//  AUTH ROUTES
//  ================

// show register form
router.get("/register", function (req, res) {
    res.render("register");
});

//handle sign up logic
router.post("/register", middleware.isNewUser, function (req, res) {

    res.send("signing you up...");
    /*
    var newUser = new User({ username: req.body.username });
    User.register(newUser, req.body.password, function (err, user) {

        if (err) {
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function () {
            res.redirect("/posts");
        });
    });
    */
});

// show login form
router.get("/login", function (req, res) {

    res.render("login");
});

/*
//app.post("/login", middleware, callback);
// handling login logic
router.post("/login", 


    //middleware
    passport.authenticate("local",
    {
        successRedirect: "/posts"
        , failureRedirect: "/login"
    })

    ,function (req, res) {
        //callback function
    });

//  logic route
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/posts");
});
*/


module.exports = router;