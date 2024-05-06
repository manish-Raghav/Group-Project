import React, { useState } from 'react'

import img from '../../assets/oms.png'
import {FaBars} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'; 
import img2 from '../../assets/om.png'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.jpeg"
import { FaShoppingCart} from "react-icons/fa";
// import Badge from '@mui/material/Badge';
// import { useSelector } from 'react-redux'
// import Authe from '../../Pages/Authe';

const Icon = () => {
   
   const [isopen ,setisopen] = useState(false);
   
    // const data= useSelector((stat) => stat.productcart.cartItem);

    
  



  return (
    <div className='flex '>

  
    {/* <Link>


    </Link> */}<div className='flex  sm:gap-2     md:gap-12 '>
           <Link to="/Cart"> 
                 <div className='relative cursor-pointer focus:text-red-700 '>
                 <FaShoppingCart className='mt-2 size-6 text-red-400' />  
              
                 
                 </div>
                 </Link>

                 <Link to='/login'>
                 <div className='cursor-pointer p-2   focus:text-red-700'>
                 <FaUser className='text-xl text-red-400'    />   
                   </div>
                 </Link>
</div>

      <div className=' absolute  w-44 sm:top-12 md:top-11  md:left-12 z-30 shadow-md bg-slate-50 capitalize'>
          {
            isopen ? (<Authe /> ): null
          }  
          </div>
    </div>
  )
}

export default Icon
