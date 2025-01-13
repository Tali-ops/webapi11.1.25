module.exports={
    Get:(req,res)=>{
        try{
        return res.status(200).json({Msg:"All Products"});
        }
        catch
        {
            return res.status(500).json({Msg:"500 Server Error"});
        }
    },
    GetById:(req,res)=>{
        try{
        return res.status(200).json({Msg:` Get Product Id ${req.params.id}`});
        }
        catch
        {
            return res.status(500).json({Msg:"500 Server Error"});
        }
    },
    AddNew:(req,res)=>{
        try{
        return res.status(200).json({Msg:" Add New Product",Data:res.body})
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