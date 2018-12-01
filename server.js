const express = require('express');
require('dotenv').config();
var db = require("./models");
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public')));
// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var router = require("./controllers/burgers_controller.js");

app.use(router);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});
