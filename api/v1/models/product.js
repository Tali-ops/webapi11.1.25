const mongoose = require('mongoose');//
const mongoode=require('mongoose');
const productScema=mongoose.Schema({
_id:mongoose.Schema.Types.ObjectId,
pname:String,
price:Number,
pdesc:String,
picname:String,
cid:String,
pid:Number
});
const model=mongoose.model('product',productScema);
module.exports=model;