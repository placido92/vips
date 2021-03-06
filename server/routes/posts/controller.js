module.exports = (function () {
    var Post = require('./Post.js')

    var getAll = function (req, res) {
        Post.find()
            .limit(20)
            .then(function (posts) {
                res.json(posts);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    var insertPost = function (req, res) { 
        var post = new Post(req.body);

        post.save()
            .then(function (post) {
                res.json(post);
             })
            .catch(function (err) { 
                console.log(err);
            });
    }

    return {
        getAll,
        insertPost

    }

})()