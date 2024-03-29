//Required dependencies
const express = require("express");
const exphbs = require("express-handlebars");
//PORT setup
const PORT = process.env.PORT || 8080;

const app = express();
// Serves static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));
// Parses application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Sets handlebars as the view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burger_controller");

app.use(routes);

app.listen(PORT, function () {
  console.log("Now listening at localhost:" + PORT);
});
