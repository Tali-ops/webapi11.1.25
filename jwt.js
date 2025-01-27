const jwt=require('jsonbtoken');//חיבור לספרייה 
const 
token=jwt.sign({Uid:23,Email:"tlylys564@gmail.com"},"myprivatekey",{expiresIn:'1h'});
console.log(token);