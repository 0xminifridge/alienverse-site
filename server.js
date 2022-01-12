// Load Node modules
var express = require('express');
const fs = require('fs');
const request = require('request');

// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));

app.set('PORT', process.env.PORT || 8080);

app.get("/api", (req, res) => {
    res.end('"OK"');
});

// app.get('/', function(req, res) {
    
//     // ejs render automatically looks in the views folder
//     res.render('public/index');
// });

// Port website will run on
console.log("started!")
app.listen(app.get('PORT'), () => console.log(`Node server listening on port ${app.get('PORT')}!`));