const express = require('express');
const app = express();
const bodyParser =require('body-parser');
const session = require('express-session');
const path = require('path');
const indexRouter = require('./router/index.route');
const userRouter = require('./router/user.route');
const adminRouter = require('./router/admin.route');


app.set('view Engine','ejs');
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')));


app.use(indexRouter);
app.use('/user',userRouter)
app.use('/admin',adminRouter)

app.listen(3001,()=>{
    console.log("server Strted")
})