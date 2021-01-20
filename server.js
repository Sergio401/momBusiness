const express = require("express");
const router = express.Router();
const path = require("path");
const app = express();
const engines = require('consolidate');
const productsRouter = require('./routes/products');

app.engine('hbs', engines.handlebars);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended : false}));

app.get("/", (req, res) => {res.render("login");});
app.get("/sales", (req, res) => {res.render("sales");});

const server = app.listen(3000, function() {
    console.log(`Listening http://localhost:${server.address().port}`);
});