//Required dependencies
const express = require('express');
const exphbs = require('express-handlebars');
//PORT setup
const PORT = process.env.PORT || 8080;

const app = express();
// Serves static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));
// Parses application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Sets handlebars as the HTML engine
app.engine("handlebars", exphbs({ defaultLayout : "main "}))
app.set('view endine', 'handlebars');

// const routes = require()

// app.use(routes);

app.listen(PORT, function() {
    console.log("Now listening at localhost:" + PORT);
})
