var express = require("express");
var router = express.Router({mergeParams: true});
var Post = require("../models/post");
var Comment = require("../models/comment" );
var middleware = require("../middleware/index.js"); // or this can be require("../middleware") because it always look for index when file name is not specified


//====================
//comments routes
//====================

router.get("/new", middleware.isLoggedIn, function (req, res) {
    /*
    //find post by id
    Post.findById(req.params.id, function (err, Post) {

        if (err) {
            console.log(err);
        } else {
            res.render("comments/new", { Post });
        };
    });
*/
});

router.post("/", middleware.isLoggedIn, function (req, res) {
    /*
    //lookup post using ID
    Post.findById(req.params.id, function (err, post) {
        if (err) {
            console.log(err);
            res.redirect("/posts");

        } else {
            Comment.create(req.body.comment, function (err, comment) {
                if (err) {
                    console.log(err);
                } else {
                    //add username and id to comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;

                    //save comment
                    comment.save();

                    post.comments.push(comment);
                    post.save();
                    res.redirect('/posts/' + post._id);
                }

            });
        }

    });
    */
});

//comment edit route
router.get("/:comment_id/edit",middleware.checkCommentOwnership, function(req, res){
    /*
    Comment.findById(req.params.comment_id, function(err, foundComment){
        if(err){
            res.redirect("back");
        } else {
            res.render("comments/edit", {post: req.params.id, comment: foundComment});
        }
    });
    */
     res.render("comments/edit", {post: req.params.id});
});

//comment update
router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res){
    /*
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
        if(err){
            res.redirect("back");
        } else {
            res.redirect("/posts/"+ req.params.id);
        }
    });
    */
}); 

//comment destroy route
router.delete("/:comment_id",middleware.checkCommentOwnership, function(req, res){
    /*
    //findByIdAndRemove
        Comment.findByIdAndRemove(req.params.comment_id, function(err){
            if(err){
                res.redirect("back");

            } else {
                res.redirect("/posts/" + req.params.id);
            }
        });
*/
});




module.exports = router;