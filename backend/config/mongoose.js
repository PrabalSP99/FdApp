const mongoose = require('mongoose');
require('dotenv').config();
const db = process.env.Mongouri;

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(db,{useNewUrlParser:true}).then(async(result)=>{
    console.log('connected successfully');
    })
    
}
const mongoDb = async()=>{
  await mongoose.connect(db,{useNewUrlParser: true}, (err,data)=>{
     if(err){console.log(err, "error in connection")}
     else{
      console.log('connected successfully');
     }
  })
}

module.exports=mongoDb;