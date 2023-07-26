

const mongoose=require('mongoose')

const connectionString=process.env.DATABASE

mongoose.connect(connectionString,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("mongodb atlas connected succesfully");
}).catch((error)=>{
    console.log("mongodb connection Errot!!",error);
})