const express = require('express');
const stripe = require('stripe')('sk_test_51Nw1jxSCI1FYJohV3quIYoEvbBqyXLcgFpfLaKUmP6ZgRUVpi0RmtcEEu64fQWzqYNuwIN6tCwSYyPMWHIywHdw3002QTfnbKx');
const router = express.Router();
const homeController =require('../controller/home_controller')
const cartController= require('../controller/cart_controller');
const orderController = require('../controller/order_controller')
const orderFetch = require('../controller/ordfth_controller')


router.use(express.json());
router.get('/',homeController.home);
router.use('/users',require('./users'))
router.get('/cart',cartController.data);
router.post('/orderdata',orderController.userOrder);
router.get('/myorderdata',orderFetch.usrOdrData);




router.post('/api/create-checkout-session',async(req,res)=>{
   const {products} =req.body;
// console.log(products);
   
  const lineItems = products.map((item)=>({
    price_data:{
        currency :"inr",
        product_data:{
           name:item.name
        },
        unit_amount: item.price * 100,
    },
    quantity:item.qty,

      

 }))
const session= await stripe.checkout.sessions.create({
    payment_method_types :['card'],
    line_items:lineItems,
    mode:'payment',
    success_url:"http://localhost:3200/success",
    cancel_url:"http://localhost:3200/cancel"

});

    res.json({id:session.id})
})

module.exports=router;