import React, { useState } from 'react'
import { Data } from '../Data/Data';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';

const Sweet = () => {

  const [page,setpg] = useState(1);
  var dty= Data.length
    return (
        <div className='flex  h-screen relative flex-col  max-w items-center    '> 
          
           <div className='flex justify-center mt-20  md:mx-8 md:border-[1px] md:border-black  gap-2 flex-wrap  md:max-w-full sm:w-auto '>
           {
          Data.slice(page*10-10, page*10).map((el, index) => {
            
    return (
                        <div className=' '> 
       <Card className=' md:w-56  hover:border-1  hover:border-solid  hover:border-black hover: cursor-pointer'  >
       <div className='flex justify-center py-1'>
      <Card.Img className='sm:w-[10rem] md:w-52 h-28 ' src={el.img} />
      </div>
      {/* <div className='absolute top-2 left-3 bg-red-600 rounded-sm'>
        <h5 className='text-slate-200 text-base'>-₹{el.discount}</h5>
      </div> */}
      <Card.Body>

      <div className='flex justify-center my-2'>
      <button className='p-[2px] bg-yellow-400 w-[8rem] text-lg font-normal text-slate-800  h-[2rem] rounded-2xl active:bg-yellow-600 ' >Add to cart</button>
        {/* <Button className='bg-yellow-300' onClick={handlecart}>Add To cart</Button> */}
        </div>
        <Card.Title className='text-orange-900 text-base font-sans'>{el.name}</Card.Title>
        
        <div  className='flex space-x-1 relative bottom-1'>
         <h3 className='text-orange-900 font-medium'>Weight :</h3>
        <h3 className='text-orange-900'>{el.quantity}</h3>
       </div>
       <div>
       
        <h3 className='text-orange-900 text-xl font-bold'>₹{el.price}</h3>

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
           
          Data.length>0 && <div>

          <span>◀</span>
          
          {[...Array(Math.ceil(dty.length / 10))].map((_, i) => {
        return <span key={i}>{i + 1}</span>;
      })}
         
             
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>▶</span>
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