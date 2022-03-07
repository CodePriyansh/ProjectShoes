const express = require('express');
const { render } = require('express/lib/response');
const router = express.Router();



router.get('/login',(req,res)=>{
    res.render('user-pages/user-login.ejs')
})

router.get('/register',(req,res)=>{
    res.render('user-pages/user-register.ejs')
})

module.exports = router;