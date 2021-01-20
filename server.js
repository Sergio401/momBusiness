const express = require("express");
const router = express.Router();
const path = require("path");
const app = express();
const engines = require('consolidate');

app.engine('hbs', engines.handlebars);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use("/static", express.static(path.join(__dirname, "public")));

//Routes
app.use('/', require('./routes/login'));
//app.use('/sales', require('./routes/sales'))

const server = app.listen(3000, function() {
    console.log(`Listening http://localhost:${server.address().port}`);
});