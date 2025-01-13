const express=require('express');
const app=express();
const productRouter=require('./api/v1/routes/product')
const morgan=require('morgan');
const mongoose=require('mongoose');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());


const mongoConnstr=`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@ecommerce.znjnn.mongodb.net/?retryWrites=true&w=majority&appName=ECommerce`;//חיבור לשם משתמש וסיסמה דרך ה-mongodb
mongoose.connect(mongoConnstr).then(()=>{
    console.log('Connected To Mongo');
}),

app.use('/product',productRouter);



app.all('*',(req,res)=>{
    return res.status(404).json({Msg:"Not Found 404"});
});



module.exports=app;