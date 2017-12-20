var express = require("express");
var router = express.Router();
var Post = require("../models/Post");
var middleware = require("../middleware/index.js");

//read post
router.get("/", function (req, res) {

    //get all posts from DB
    /*
    Post.find({}, function (err, allPosts) {
        if (err) {
            console.log(err);
        } else {
            res.render("posts/index", { posts: allPosts, currentUser: req.user });
        }
    });
    */
});

//post post
router.post("/", middleware.isLoggedIn, function (req, res) {
  
    /*
    var name = req.body.name;
    var desc = req.body.description;

    var author = {
        id: req.user._id,
        username: req.user.username
    };

    var newPost = {
        name: name
        , description: desc
        , author: author
    };

    //create a new post and save to DB
    Post.create(newPost, function (err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/posts");
        }

    });
    */
});

//view post page
router.get("/new", middleware.isLoggedIn, function (req, res) {
    res.render("posts/new");
});


router.get("/:id", function (req, res) {
    /*
    Post.findById(req.params.id).populate("comments").exec(function (err, foundPost) {
        if (err) {
            console.log(err);
        } else {

            //render show template with that post
            res.render("posts/show", { post: foundPost });
        }

    });
*/

});

//edit post route
router.get("/:id/edit",middleware.checkPostOwnership, (req, res) => {
    /*
    Post.findById(req.params.id, function (err, foundPost) {
        res.render("posts/edit", {post: foundPost});
    });
*/
});


router.put("/:id", middleware.checkPostOwnership, (req, res) => {
  /*
    Post.findByIdAndUpdate(req.params.id, req.body.post, (err, updatedPost) => {
        if (err) {

            res.redirect("/posts");
        } else {
            res.redirect("/posts/" + req.params.id);
        }
    });
    */
  
});


//destroy post route
router.delete("/:id",middleware.checkPostOwnership, (req, res) => {
    /*
    Post.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            res.redirect("/posts");
        } else {
            res.redirect("/posts");
        }
    });
    */
});


module.exports = router;

