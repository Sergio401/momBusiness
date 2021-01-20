const express = require('express');
const router = express.Router();

//login handle
router.get('/login',(req,res)=>{
    res.render('login');
})
router.get('/register',(req,res)=>{
    res.render('register')
})

router.get('/logout',(req,res)=>{
})
module.exports  = router;