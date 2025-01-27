const productModel=require('../models/product');
module.exports={
    Get:(req,res)=>{
        try{
            productModel.find().then((products)=>{
                return res.status(200).json(products);
            });
    
        }
        catch
        {
            return res.status(500).json({Msg:"500 Server Error"});
        }
    },
    GetById:(req,res)=>{
        try{
            productModel.find({pid:req.params.id}).then((product)=>{
                return res.status(200).json(product);
            })
        
        }
        catch
        {
            return res.status(500).json({Msg:"500 Server Error"});
        }
    },
    AddNew:(req,res)=>{
        try{
            productModel.insertMan([req.body]).then((data)=>{
                return res.status(200).json(data);
            });
        
        }
        catch
        {
            return res.status(500).json({Msg:"500 Server Error"});
        }
    },
    Update:(req,res)=>{
        try{
        return res.status(200).json({Msg:`Update Product ${req.params.id}`,body:res.body})
        }
        catch
        {
            return res.status(500).json({Msg:"500 Server Error"});
        }
    },
    Delete:(req,res)=>{
        try{
        return res.status(200).json({Msg:"Add new product",body:req.body});
        }
        catch
        {
            return res.status(500).json({Msg:"500 Server Error"});
        }
    }
}