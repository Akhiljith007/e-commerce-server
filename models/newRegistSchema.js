

const mongoose=require('mongoose')

const newregSchema=mongoose.Schema({

    fullname:{
        type:String,
    

    },
    mobile:{
        type:Number,
        required:true
    },
    birth:{
        type:Date,
     
    },
    password:{
        type:String,
   
    },
    wishlist:{
        type:Array
    },
    cart:{
        type:Array
    }




})

const mainregister=mongoose.model("mainregister",newregSchema)

module.exports=mainregister

