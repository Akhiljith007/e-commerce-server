

const mongoose=require('mongoose')


const productSchema=mongoose.Schema({



    id: {
        type: Number,
        required: true,
     

    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        rate: {
            type: Number,
            required: true
        },
        count: {
            type: Number,
            require: true
        }
    },
    imageOne: {
        type:String,
        required:true
    },
    imagetwo: {
        type:String,
        required:true
    }

})

const products=mongoose.model("product",productSchema)

module.exports=products