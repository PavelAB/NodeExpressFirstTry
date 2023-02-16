require('dotenv').config();

const express=require("express");

const app = express();


app.set('view engine','ejs');
app.set('views','views');

app.use(express.static('public'));

const router =require('./router');
app.use(router);


app.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${process.env.PORT}`);
})
