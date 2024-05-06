import React, { useState } from 'react'
import { Data } from '../Data/Data';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import { prepend } from 'dom/lib/mutation';

const Sweet = () => {

  const [page,setpg] = useState(1);
  var dty= Data.length


  

  const datashow =(pg) =>{
    if(pg >=1 && pg <dty && pg!==page)
    setpg(pg);
  }
    return (
      <div className='flex  h-screen relative flex-col  max-w items-center    '> 
          
      <div className='flex justify-center mt-20  md:mx-8  gap-2 flex-wrap  md:max-w-full sm:w-auto '>
           {
          Data.slice(page*10-10, page*10).map((el, index) => {
            
    return (
      <div className=''> 
      <Card className=' md:w-56 p-3 rounded-md hover:border-black hover:border-[1px] shadow-xl  cursor-pointer md:h-64' >
   <div className='flex justify-center py-1'>
     <Card.Img  className='sm:w-[10rem] md:w-48 h-28 ' src={el.img} alt={el.name} />
    </div>
      


      <div className=' border-1px border-red-950 absolute top-3   bg-red-600 rounded-sm'>
      <h5 className='text-slate-200 text-base'>-₹{el.discount}%</h5>
      </div>
      <Card.Body>

        <div className='flex justify-center my-2'>
           <button className='p-[2px] bg-yellow-400 w-[8rem] text-lg font-normal text-slate-800  h-[2rem] rounded-2xl active:bg-yellow-600 ' >Add to cart</button>
          {/* <Button className='bg-yellow-300' onClick={handlecart}>Add To cart</Button> */}
       </div>
       <Card.Title className='text-orange-900 text-base ml-8 font-sans'>{el.name}</Card.Title>
         <div  className='flex ml-8 space-x-1 relative bottom-1'>
            <h3 className='text-orange-900 font-medium'>Weight :</h3>
            <h3 className='text-orange-900'>{ el.quantity}</h3>
         </div>
         <div>
 
         <h3 className='text-orange-900 text-xl font-bold ml-7'>₹{el.price}</h3>

         </div>
      </Card.Body>
    </Card>
 </div>
                    );
                  })
         }

         
           </div>
           <div>

         {
           
          Data.length>0 && <div className='flex gap-2 mt-10 text-lg'>

          <span className='cursor-pointer bg-slate-300 w-14 mr-5 text-center hover:scale-95' onClick={()=>datashow(page-1)}>Pre</span>
          
          {[...Array(Math.ceil(dty / 10))].map((_, i) => {
        return <span key={i}>{i + 1}</span>; 
      })}
         
             
            
              <span className='cursor-pointer bg-slate-300 w-14 ml-5 text-center hover:scale-95' onClick={()=>datashow(page+1)}>Next</span>
          </div>

         }

         </div>
           <div className='mt-32 w-full'>
        <Footer />
       </div>
        </div>
      )
    }
    
    export default Sweet
