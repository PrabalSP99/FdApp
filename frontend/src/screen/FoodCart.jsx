import React from 'react'
import {loadStripe} from '@stripe/stripe-js';
import {useCart,useDispatchCart} from '../components/ContextReducer'


 const Cart= ()=> {
  const Data = useCart();
  const dispatch = useDispatchCart();

  if (Data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    )
  }


  const handleRemove = (index)=>{
    dispatch({type:"REMOVE",index:index})
  }


  const handleCheckOut = async()=>{

    const stripe = await loadStripe('pk_test_51Nw1jxSCI1FYJohVnri9jjzHQgASJOVXXa67MNwPrWL9XhhBptUEbE0PNUBy5vvKpvOw7xdZcS9mICnDmjxN5GA400QDpgKXcz');
     
    const body={
      products:Data 
   }

     const response = await fetch('https://temporary-five.vercel.app/api/create-checkout-session',{
         method: 'POST',
         headers:{
          'Content-Type':'application/json'
   },
         body:JSON.stringify(body)
     });
     
     const session = await response.json();

     const result = stripe.redirectToCheckout({
      sessionId:session.id
     });
     
     if(result.error){
      console.log(result.error)
     }
  }
  

   let totalPrice = Data.reduce((total, item) => total + item.price, 0)

  return (
    <div>
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' >Delete</th>
            </tr>
          </thead>
          <tbody>
           
           
            { 
              Data.map((item, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.size}</td>
                <td>{item.price}</td>
                <td ><button type="button" className="btn p-0" onClick={handleRemove}>delete</button> </td>

                </tr>
            ))}
          </tbody>
        </table> 
        <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-5 ' onClick={handleCheckOut}> Payment</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
