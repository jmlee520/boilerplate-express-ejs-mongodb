var Post = require("../models/post");
var Comment = require("../models/comment");
var User = require("../models/user");


var middlewareObj = {};

middlewareObj.isNewUser = function (req, res, next) {
    User.find({ 'username': req.body.username }, function (err, foundUser) {
        if (err) {
            next();
        } else {
            console.log("username already exist");
            res.redirect("back");
        }
    });
}


middlewareObj.checkPostOwnership = function (req, res, next) {
    //is user logged in
    if (req.isAuthenticated()) {

        Post.findById(req.params.id, function (err, foundPost) {
            if (err) {
                res.redirect("back");
            } else {


                if (foundPost.author.id.equals(req.user._id)) {
                    next();

                } else {
                    res.redirect("back");
                }

            }
        });

    } else {

        res.redirect("back");
    }

}
   
middlewareObj.checkCommentOwnership = function (req, res, next) {

    if (req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, function (err, foundComment) {
            if (err) {
                res.redirect("back");
            } else {
                if (foundComment.author.id.equals(req.user._id)) {
                    next();
                } else {
                    res.redirect("back");
                }
            }
        });
    } else {
        res.redirect("back");
    }
}

middlewareObj.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = middlewareObj;