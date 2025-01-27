const express=require('express');
const app=express();
const morgan=require('morgan');
const mongoose=require('mongoose');
const productRouter=require('./api/v1/routes/product');
const userRouter=require('./api/v1/routes/user');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());


const mongoConnstr=`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@ecommerce.znjnn.mongodb.net/WebApi2025`;
mongoose.connect(mongoConnstr).then(()=>{
    console.log('Connected To Mongo');
}),

app.use('/product',productRouter);
app.use('/user',userRouter);


app.all('*',(req,res)=>{
    return res.status(404).json({Msg:"Not Found 404"});
});



module.exports=app;