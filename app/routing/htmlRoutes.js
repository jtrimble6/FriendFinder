// var survey = require("../public/survey");
// var home = require("../public/home.html");
var path = require("path");

module.exports = function(app) {

    app.get("/api/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
        // res.json(survey);
    });

    app.get("/", function(req, res) {
        // res.json(home);
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}