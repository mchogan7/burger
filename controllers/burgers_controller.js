var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var dataObject = {
      burgers: data
    };
    console.log(dataObject);
    res.render("index", dataObject);
  });
});

router.post("/", function(req, res) {
  console.log('req ' + req.body.name)
  burger.insertOne(req.body.name, function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var ID = req.params.id;

  burger.updateOne(ID, function() {
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;
