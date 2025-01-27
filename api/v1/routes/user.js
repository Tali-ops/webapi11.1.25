const router=require('express').Router();//יצירת אובייקט ראוטר 
const bcrypt=require('bcrypt');
const userModel=require('../models/user');
router.post('/checkisexsist',(req,res)=>{
    const {userName}=req.body;
    userModel.find({userName}).then((data)=>{
        if(data.length==0){//אם שם המשתמש לא נמצא 
            return res.status(200).json({msg:"The Username is available "});
        }
            return res.status(400).json({msg:"The Username is  not avilable ,try again"});
});
}
);
router.post('/login',(req,res)=>{//נקודת קצה עבור התחברות 
    const {userName,pass}=req.body;//מגדיר אובייקט שמקבל את הבאדי
    userModel.find({userName}).then((data)=>{
        if(data.length==0)
            return res.status(200).json({msg:"User / Pass Not Found"});
        const hashPass=data[0].pass;
        bcrypt.compare(pass,hashPass).then((ans)=>{
            return res.status(200).json({msg:"login Succefully"});
        });
    });
});

    //bcrypt.hash(password, 10, (err, hashString) => {  // 10 הוא מספר הסיבובים (rounds)
       // if (err) {
        //    return res.status(500).json({ msg: err.message });
       // } else {
           // userModel.create({ userName, pass: hashString, fullName: req.body.fullName }).then((data) => {
          //      return res.status(200).json(data);
        //    }).catch((err) => {
          //      return res.status(500).json({ msg: err.message });
         //   });
        //}
   // });
//});
router.post('/signup',(req,res)=>{//נק קצה עבור הרשמה
//נקבל את פרטי המשתמש לרישום 
//נצפין את הסיסמה 
//נשמור את פרטי המשתמש בבסיס הנתונים 
const rounds=10;
const {userName,pass,fullName}=req.body;//מגדיר אובייקט שמקבל את הבאדי
bcrypt.hash(pass,rounds,(err,hashString)=>{

    if(err){
       return res.status(500).json({msg:err.message});
   }
    else{
        userModel.insertMany([{userName,pass:hashString,fullName}]).then((data)=>{
            return res.status(200).json(data);
        });
    }
});
});//נקודת קצה עבור הרשמה 
module.exports=router;