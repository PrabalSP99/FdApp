import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import Badge from "react-bootstrap/Badge"
import Modal from '../Modal';
import Cart from '../screen/FoodCart';
import {useCart} from './ContextReducer'


const Nav = function Navbar() {
  let data = useCart();
  
  const [cartView,setCartView]= useState(true);
  const Navigate= useNavigate();
  function handle(){
    localStorage.removeItem('authtoken');
     Navigate('/');
  }


  return (
    <div>
      
      <nav className='bg-gradient-to-r from-slate-300 to-red-200 flex'>
        
      <div className='text-5xl antialiased italic font-serif font-semibold mt-2 ml-6'>
         <Link className="no-underline text-blue-600" to="/">Prabs</Link>
        </div>
        <div className='container-fluid  justify-end'>
         <ul className='flex justify-end py-3 space-x-5 mt-2 mr-5'>
           <li> 
              <Link className="no-underline text-gray-700 hover:text-indigo-700 	 text-xl font-semibold" to="/"> 
               Home
              </Link>
            </li>

            <li>
            {(localStorage.getItem('authtoken')) ? <div className=''>
                <Link className="no-underline text-gray-700 text-xl font-semibold hover:text-indigo-700 " to="/myorder"> Orders</Link>
              </div> : ''} 
            </li>

             <li>
             {(!localStorage.getItem('authtoken')) ? <div className='space-x-5'>
              <Link className="no-underline text-gray-700 text-xl hover:text-indigo-700 font-semibold" to='/login'>Login</Link>
              <Link className="no-underline text-gray-700 text-xl hover:text-indigo-700 font-semibold" to='/signup'>SignUp</Link>
            </div>
             : <div className='space-x-5'>

              <button className="text-gray-700 text-xl hover:text-indigo-700 font-semibold" onClick={()=>{ setCartView(false) }}>
                  Cart <Badge pill bg='danger'>{data.length===0?'':data.length}</Badge> 
              </button>
              {cartView ? null : <Modal onclose={()=>{setCartView(true)}}><Cart/></Modal>} 
              <button className="text-gray-700 text-xl hover:text-indigo-700 font-semibold" onClick={handle}>LogOut</button>
              </div> 
              
              }
             </li>
         </ul>
        </div>
       
      </nav>
   
    </div>
  )
}
export default Nav;






// <nav className='bg-purple-800 text-gray-700 flex' id='nav'>
//         <div className="container-fluid">
          
//           <div className='font-serif '>
//             <div className="">
//               <Link className="nav-link active fs-5" aria-current="page" to="/"> 
//                Home
//               </Link>

//               {(localStorage.getItem('authtoken')) ? <div className=''>
//                 <Link className="nav-link active fs-5" aria-current="page" to="/myorder"> Orders</Link>
//               </div> : ''}
//             </div>
           
//             {(!localStorage.getItem('authtoken')) ? <div className='navbar-nav'>
//             <div className='flex-row-reverse '>
//               <Link className="btn bg-white text-success mx-1" to='/login'>Login</Link>
//               <Link className="btn bg-white text-success mx-1" to='/signup'>SignUp</Link>
//             </div>
//               </div> : <div>

//               <button className="btn bg-white text-success mx-1" onClick={()=>{ setCartView(false) }}>
//                   Cart <Badge pill bg='danger'>{data.length===0?'':data.length}</Badge> 
//               </button>
//               {cartView ? null : <Modal onclose={()=>{setCartView(true)}}><Cart/></Modal>} 
//               <button className="btn bg-white text-success mx-1" onClick={handle}>LogOut</button>
//               </div> 
              
//               }
//           </div>
//         </div>
//       </nav>
