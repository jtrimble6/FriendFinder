var friends = require("../data/friend");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        console.log(friends);
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        console.log(req);
        friends.push(req.body);
        if (friends.length > 1) {
            res.json(true);
        } else {
            res.json(false);
        }
    });
};