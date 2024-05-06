import React, { useState } from 'react'

import Card from 'react-bootstrap/Card';

import { useNavigate } from 'react-router-dom';


const Mycard = ({  name, image,catego, price , quant,discount,desc}) => {

  const [open, setopen]= useState(false);
  

   const navi = useNavigate();

 


    
    

       
  
  return (
    <div className='  flex flex-row mt-3 gap-3   ' >
  







 
{/* //////////////////////------> */}
<div > 
<Card className=' md:w-56  pl-6 rounded-md hover:border-black hover:border-[1px] shadow-2xl  md:h-64' >
   <div className='flex justify-center py-1'>
     <Card.Img  className='sm:w-[10rem] md:w-48 h-28 ' src={image} alt={name} />
    </div>
      


      <div className=' border-1px border-red-950 absolute top-3   bg-red-600 rounded-sm'>
      <h5 className='text-slate-200 text-base'>-₹{discount}%</h5>
      </div>
      <Card.Body>

        <div className='flex justify-center my-2'>
           <button className='p-[2px] bg-yellow-400 w-[8rem] text-lg font-normal text-slate-800  h-[2rem] rounded-2xl active:bg-yellow-600 ' >Add to cart</button>
          {/* <Button className='bg-yellow-300' onClick={handlecart}>Add To cart</Button> */}
       </div>
       <Card.Title className='text-orange-900 text-base ml-8 font-sans'>{name}</Card.Title>
         <div  className='flex ml-8 space-x-1 relative bottom-1'>
            <h3 className='text-orange-900 font-medium'>Weight :</h3>
            <h3 className='text-orange-900'>{ quant}</h3>
         </div>
         <div>
 
         <h3 className='text-orange-900 text-xl font-bold ml-8'>₹{price}</h3>

         </div>
      </Card.Body>
    </Card>
 </div>







      {/* seopen={setopen} ope={open} */}
      {/* {
        open ? (
          <Cardinfo  data={setopen} id={id} name={name} img ={image} cat={catego} ps ={price}  quant= {quant} dis={discount} desc={desc} />

         ) : null
      } */}
    </div>
  )
}

export default Mycard