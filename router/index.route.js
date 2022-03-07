const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('index.ejs');
})
router.get('/mensSection',(req,res)=>{
    res.render('./user-pages/mensSection.ejs')
})
router.get('/womenSection',(req,res)=>{
    res.render('./user-pages/WomenSection.ejs')
})
router.get('/kidSection',(req,res)=>{
    res.render('./user-pages/kidsSection.ejs')
})

router.get('/profile',(req,res)=>{
    res.render('./user-pages/user-profile.ejs')
})
router.get('/contact',(req,res)=>{
    res.render('./user-pages/contact-us.ejs')
})
router.get('/about',(req,res)=>{
    res.render('./user-pages/about-us.ejs')
})
router.get('/product-view',(req,res)=>{
    res.render('./user-pages/product-view.ejs')
})
router.get('/cart',(req,res)=>{
    res.render('./user-pages/cart.ejs')
})
module.exports = router