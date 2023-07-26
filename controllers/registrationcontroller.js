
const registeration = require('../models/newRegistSchema')
// const wishlist = require('../models/wishlistSchemas')






exports.registerNow = async (req, res) => {

    const { fullname, mobile, birth, password } = req.body

    if (!fullname || !mobile || !birth || !password) {
        res.status(403).json('all inputs are required')
    }

    try {

        const preuser = await registeration.findOne({ mobile })

        if (preuser) {

            res.status(406).json('user already exist')
        }

        else {

            const newuser = new registeration({

                fullname,
                mobile,
                birth,
                password,


            })
            await newuser.save()
            res.status(200).json(newuser)
        }



    }
    catch (error) {

        res.status(401).json(error)

    }
}

exports.loginNow = async (req, res) => {


    const { mobile, password } = req.body


    try {
        const preuser = await registeration.findOne({ mobile, password })

        console.log(preuser);

        if (preuser) {
            res.status(200).json({ preuser })


        }
        else { res.status(404).json('user was not registered') }
    }
    catch (error) {

        res.status(401).json(error)
    }
}

// add to wishlist

exports.addtoWishList = async (req, res) => {

    const { mobile } = req.params
    const { id, title, price, image, } = req.body
    console.log(id);
    console.log({ mobile });

    try {

        const preuser = await registeration.findOne({ mobile })
        console.log(preuser);


        if (preuser) {


            if (preuser.wishlist.find(item => item.itemId == id)) {

                console.log(preuser.wishlist);

                res.status(200).json('product already exist in your wishlist')

            }
            else {
                preuser.wishlist.push({


                    itemId: id, itemtitle: title, itemprice: price, itemimage: image


                })

                await preuser.save()

                res.status(200).json("successfully added")


            }






        }
        else {

            res.status(401).json("plz login")
        }

    }
    catch (error) {

        res.status(401).json(error)
    }


}


// get favourites

exports.getFavourites = async (req, res) => {

    console.log(req);

    const mobile = req.params.mobile

    try {

        const favourites = await registeration.findOne({ mobile })



        console.log(favourites.wishlist);





        res.status(200).json(favourites.wishlist)



    } catch (error) {
        res.status(401).json(error)

    }

}




// remove favourites



exports.removeFav = async (req, res) => {

    const mobile = req.params.mobile
    const { id } = req.body





    console.log(id);

    try {

        const users = await registeration.findOne({ mobile })
        const preuser = await registeration.updateOne({ mobile: mobile }, { $pull: { wishlist: { itemId: id } } })



        res.status(200).json(users)
    }
    catch (error) {

        res.status(401).json(error)
    }




}





// add to carts



exports.addtoCart = async (req, res) => {

    const { mobile } = req.params
    const { id, title, price, image, quantity } = req.body
    console.log(title);
    console.log({ mobile });

    try {

        const preuser = await registeration.findOne({ mobile })



        if (preuser) {


            if (preuser.cart.find(item => item.itemId == id)) {


                preuser.cart.push({


                    itemId: id, itemtitle: title, itemprice: price, itemimage: image, itemQuantity: quantity, total: price




                })

                await preuser.save()

                res.status(200).json("Again the same product successfully added")


            }
            else {
                preuser.cart.push({


                    itemId: id, itemtitle: title, itemprice: price, itemimage: image, itemQuantity: quantity, total: price




                })

                await preuser.save()

                res.status(200).json("successfully added to cart")


            }






        }
        else {

            res.status(401).json("Please login")
        }

    }
    catch (error) {

        res.status(401).json(error)
    }



}


// // get carts







exports.getMyCart = async (req, res) => {

    console.log(req);

    const mobile = req.params.mobile

    try {

        const favourites = await registeration.findOne({ mobile })



        console.log(favourites.cart);





        res.status(200).json(favourites.cart)



    } catch (error) {
        res.status(401).json(error)

    }

}


exports.deleteCartOne = async (req, res) => {

    const mobile = req.params.mobile
    const { id } = req.body





    console.log(id);

    try {

        const preuser = await registeration.updateOne({ mobile: mobile }, { $pull: { cart: { itemId: id } } })



        res.status(200).json(preuser)
    }
    catch (error) {

        res.status(401).json(error)
    }




}


exports.deleteAllCarts = async (req, res) => {

    const { id } = req.body
    const mobile = req.params.mobile

    console.log(id);
    try {

        // const allCarts = await registeration.findOne({ mobile })

        const preuser = await registeration.updateMany({ mobile: mobile }, { $pull: { cart: { itemId: id } } })

        // await allCarts.cart.deleteMany()

        // const allwishlist = await allCarts.cart.find()
        res.status(200).json(preuser)
    }
    catch (error) {
        res.status(401).json(error)
    }


}



