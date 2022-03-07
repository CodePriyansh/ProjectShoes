const express  =require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('admin-pages/admin-home.ejs')
})

router.get('/users',(req,res)=>{
    res.render('admin-pages/admin-users.ejs')
})

router.get('/view-category',(req,res)=>{
    res.render('admin-pages/view-category.ejs')
})

router.get('/add-product',(req,res)=>{
    res.render('admin-pages/add-product.ejs')
})

router.get('/edit-product',(req,res)=>{
    res.render('admin-pages/edit-product.ejs')
})



module.exports = router;