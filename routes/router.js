

const express=require('express')

const db=require('../controllers/productsController')

// const wishlist=require('../controllers/favouriteswishlist')

const regist=require('../controllers/registrationcontroller')

// const cart=require('../controllers/cartController')


const router=new express.Router()

router.get('/allproducts',db.getallproducts)

router.get('/mobiles',db.getmobileproducts)

router.get('/laptops',db.getlaptopproducts)

router.get('/cameras',db.getcameraproducts)

router.get('/view/:id',db.viewProducts)

router.post('/register',regist.registerNow)

router.post('/login',regist.loginNow)


router.post('/add-favourites/:mobile',regist.addtoWishList)

router.get('/get-favourites/:mobile',regist.getFavourites)




router.post(`/remove-favourites/:mobile`,regist.removeFav)

// router.delete('/wishlist/:mobile',wishlist.deleteAllFavourites)

router.post('/add-to-cart/:mobile',regist.addtoCart)

router.get('/get-cartItems/:mobile',regist.getMyCart)

router.post('/deleteSingle/:mobile',regist.deleteCartOne)

router.post('/carts/:mobile',regist.deleteAllCarts)



module.exports=router