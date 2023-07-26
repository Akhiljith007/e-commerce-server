

const products=require('../models/productSchema')


exports.getallproducts=async (req,res)=>{
    try{
        const allproducts=await products.find()
        res.status(200).json(allproducts)
    }
    catch(error){

        res.status(401).json(error)

    }
}


exports.getmobileproducts= async (req,res)=>{


    try{
        const mobileproducts= await products.find({category:"mobile"})

        res.status(200).json(mobileproducts)
    }
    catch(error){
        res.status(401).json(error)
    }
}


exports.getlaptopproducts= async (req,res)=>{

try{
    const laptopproducts= await products.find({category:"laptop"})
    res.status(200).json(laptopproducts)
}
catch(error){
    res.status(401).json(error)
}
}


exports.getcameraproducts= async (req,res)=>{

  try{ const cameraproducts= await products.find({category:"camera"}) 

    res.status(200).json(cameraproducts)
}
catch(error){
    res.status(401).json(error)
}
}

exports.viewProducts = async (req,res)=>{

  let id=req.params.id

    try{
       const viewproduct= await products.findOne({id})
        res.status(200).json(viewproduct)
    
    }
    catch(error){
        res.status(401).json(error)

    }

}