const express = require("express");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const PassportLocal = require("passport-local").Strategy;

var router = require('express').Router();

router.use(express.urlencoded({extended: true}));

router.use(cookieParser("Mi mamá tiene 42 años"))

router.use(session({
    secret: "Mi mamá tiene 42 años",
    resave: true,
    saveUninitialized: true
}));

router.use(passport.initialize());
router.use(passport.session());

passport.use(new PassportLocal(function (username, password, done){
    if(username === "Liliana" && password === "sergio2905")
        return done(null, {id: 1, name: "Cody"})
    done(null, false);
}));

// Serialización
passport.serializeUser(function (user, done){
    done(null,user.id);
})

// Deserialización
passport.deserializeUser(function (id, done){
    done(null, {id: 1, name: "Cody"})
});

router.get('/sales', checkAuthentication, (req, res) => {
   res.render('sales')
});

router.get('/', (req, res) => {
    res.render("login");
});

router.post('/', passport.authenticate("local",{
    successRedirect: "/sales",
    failureRedirect: "/"
}));

function checkAuthentication(req,res,next){
    req.isAuthenticated() ? next() : res.redirect("/");
}

module.exports = router;