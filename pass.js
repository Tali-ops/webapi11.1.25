const bcrypt= require('bcrypt');
const pass="tali";
const rounds=11;
bcrypt.hash(pass,rounds,(err,hashString)=>{


if (err){
      console.log(err.message);
  }
 else{
      console.log(hashString);
  }
  });
let hashfromDb="$2b$10$FcIMV4DoKXu/cW0Aw.PfpuJvBRBrw6BlnGWc0lKM8ytMyMk17kV1";
bcrypt.compare(pass,hashfromDb).then((ans)=>{
    if(ans)
        console.log('ok');
    else
  console.log('not ok');
       


});

