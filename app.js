var express = require("express"); 

// start express
var app = express(); 

// this module allow to read params passed via body (post method)
var bodyParser = require("body-parser"); 

// mongodb orm
//var mongoose = require("mongoose");

// models
/*
var Post = require("./models/post");
var Comment = require("./models/comment"); 
*/

// this module allow to bypass a way to use put and delete
var methodOverride = require("method-override");


//=======
//Router
//=======
var commentRouters = require("./routes/comments"),
  postRouters = require("./routes/posts"),
  indexRoutes = require("./routes/index");

//authentication
/*
var passport = require("passport"); // authentication middleware   
var LocalStrategy = require("passport-local");
var User = require("./models/user"); // using user model
*/


app.use(bodyParser.urlencoded({ extended: true })); //setting to use bodyparser
app.set("view engine", "ejs"); //this allows ommiting ejs file extention
app.use(express.static(__dirname + "/public")); //setting to use public folder

// use mothod-override
app.use(methodOverride("_method"));

//database connection
//mongoose.connect("mongodb://localhost/api");


// PASSPORT CONFIGURATION
/*
*secret can be set as any string
*/
/*
app.use(require("express-session")({

  secret: "secretissecret",
  resave: false,
  saveUninitialized: false

}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//passing user to all pages
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});
*/

app.use("/",indexRoutes);
app.use("/posts",postRouters);
app.use("/posts/:id/comments", commentRouters);


//server
app.listen("3000", function () {

  console.log("server is running at port 3000");

});

