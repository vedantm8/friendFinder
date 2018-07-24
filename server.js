// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// (DATA)
// =============================================================
function friends() {
var friend = [
    {
        name: 'Bruce Wayne',
        BQ: 3,
        BQ2: 4,
        BQ3: 5,
        BQ4: 2,
        BQ5: 4,
        BQ6: 3,
        BQ7: 5,
        BQ8: 3,
        BQ9: 1,
        BQ10: 3
    },
    {
        name: 'Clark Kent',
        CQ1: 5,
        CQ2: 4,
        CQ3: 4,
        CQ4: 5,
        CQ5: 4,
        CQ6: 4,
        CQ7: 4,
        CQ8: 5,
        CQ9: 4,
        CQ10: 3 
    },
    {
        name: 'Barry Allen',
        AQ1: 5,
        AQ2: 3,
        AQ3: 2,
        AQ4: 1,
        AQ5: 2,
        AQ6: 3,
        AQ7: 4,
        AQ8: 2,
        AQ9: 3,
        AQ10: 2
    }
]
}

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/home.html", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/home.html"));
});
// Add a profile
app.get("/survey.html", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/survey.html"));
});

// Posting on newly created profile
app.post("/api/survey", function (req, res) {

  // var friend = req.body;

  // console.log(friend);

  // res.json(friend);

  
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT + '/home.html');
});