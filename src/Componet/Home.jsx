import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

import gv from '../assets/gv2.jpeg'
import ad from '../assets/adv3.jpg'
import ad2 from '../assets/mka.jpg'
import ad3 from '../assets/adv1.jpg'
import mp from '../assets/corptt.png'
import AllProduct from '../Data/AllProduct';

import Mycard from './Mycard';
import { GrPrevious,GrNext } from 'react-icons/gr';

import Footer from './Footer';
import MainCarousel from '../Carousel/MainCarousel';

import { FaMapLocationDot } from "react-icons/fa6";

import { IoMdMailUnread } from "react-icons/io";

import { IoCallOutline } from "react-icons/io5";

import { FaCalendarDays } from "react-icons/fa6";
import { NewPro } from '../Data/NewPro';
import Best from '../Data/Best';
import { propTypes } from 'react-bootstrap/esm/Image';
import { PiNyTimesLogo } from 'react-icons/pi';

// import classNames from 'classnames';

  




const Home = () => {
    const [arr ,setarr] = useState([]);
    const [sw ,setsw] = useState([]);


    const[nm,setnm] =useState();
    const[pn,setpn] =useState();
    const[eml,seteml] =useState();
    const[ms,setms] =useState();



    const [loaded, setLoaded] = useState(false);

   

    // const usedisp = useDispatch()

    
    // useEffect(()=>{
    //   axios.get('http://localhost:4000/all')
    //   .then(res =>{
    //      usedisp(setDataProduct(res.data));
         
    //     // setarr(res.data);

    //   })
    //   .catch(err=>{
    //     console.log(err);
    //   })
    // },[])
       
         
 

    // useEffect(() =>{
    //   setsw( setm.filter((item) => item.product_name ==="sweet" ))
    // },[])
   
      
      
     
    
    useEffect(()=>{
      axios.get('https://nice-pink-llama-cape.cyclic.app/Sweet')
      .then(res =>{
        setsw(res.data);
      })
      .catch(err=>{
        console.log(err);
      })
    },[])
    const slideproduct = useRef()

    const nextd = ()=>{
      slideproduct.current.scrollLeft +=200
    }
    const privious = ()=>{
      slideproduct.current.scrollLeft -=200
    }
    

    const pnt=()=>{
        console.log(nm);
        console.log(pn);
        console.log(eml);
        console.log(ms);
    }

  return (
  
       
     
     <div className='flex flex-col relative   max-h-full '> 
     
     <div className='mt-[4.1rem] w-full'>
      <MainCarousel />
     </div>




    <div className='flex  flex-col justify-center mt-11  '>

    <div className='flex flex-row  justify-center' >
    <hr className='mt-6 mr-3 md:w-96 h-1 bg-red-900' />
       <div className=' flex  '> 
       <h1 className='text-3xl  font-bold text-red-900 pr-2 ' >All </h1>
       <h1 className='text-3xl font-thin text-red-900 ' > Products </h1>
     </div>
     <hr className='mt-6 ml-3 md:w-96 h-1 bg-red-900' />
     </div>


     {/* <div>
       <Homesectioncaro />
     </div> */}
    
     <div className=' ml-3 gap-2 sm:w-9 md:w-[78rem] h-[19rem] md:relative left-16 flex flex-row mt-3  hover:cursor-pointer   ' 
            ref={slideproduct}>
    



    <div className='  w-full  mt-28 sm:invisible md:visible absolute z-20 flex justify-between'>
     <div className='absolute  z-40 top-[1.2rem]  '>
     <button className='text-3xl font-bold bg-red-600 hover:bg-amber-400 rounded-md' onClick={privious} ><GrPrevious/></button>
     </div>

     <div className= ' absolute right-[0rem] top-[1.2rem] z-30'>
     <button className='text-3xl font-bold  bg-red-600 hover:bg-amber-400 rounded-md ' onClick={nextd}  ><GrNext /></button>
     </div>
     </div>
     
     {
      AllProduct.map((el, index) => {
                return (
                  <Mycard
                 
                 name={el.name}
                    catego={el.Product_name}
                    price={el.price}
                    image={el.img}
                    quant ={el.quantity}
                    discount = {el.discount}
                    desc ={el.description}
                  />
                );
              })
     }
    
     </div>
  

          

     <div className='flex flex-row mt-16  justify-center' >
    <hr className='mt-6 mr-3 md:w-96 h-1 bg-red-900' />
       <div className=' flex  '> 
       <h1 className='text-3xl  font-bold text-red-900 pr-2 ' >BestSheller </h1>
       <h1 className='text-3xl font-thin text-red-900 ' > Products </h1>
     </div>
     <hr className='mt-6 ml-3 md:w-96 h-1 bg-red-900' />
     </div>
       

      

{/*       
     overflow-x-scroll overflow-y-scroll  sm:scroll-smooth */}

     <div className=' ml-3 gap-2 sm:w-9 md:w-[78rem] h-[19rem] md:relative left-16 flex flex-row mt-3   hover:cursor-pointer  ' >
       
            
    



     <div className='  w-full sm:invisible md:visible  mt-28 absolute z-20 flex justify-between'>
     <div className='absolute   z-40 top-[1.2rem]  '>
     <button className='text-3xl font-bold bg-red-600 hover:bg-amber-400 rounded-md' onClick={privious} ><GrPrevious/></button>
     </div>

     <div className= ' absolute right-[0rem] top-[1.2rem] z-30'>
     <button className='text-3xl font-bold  bg-red-600 hover:bg-amber-400 rounded-md ' onClick={nextd}  ><GrNext /></button>
     </div>
     </div>
     {
      NewPro.map((el, index) => {
     
                return (
                 
                  <Mycard
                     name={el.name}
                    catego={el.Product_name}
                    price={el.price}
                    image={el.img}
                    quant ={el.quantity}
                    discount = {el.discount}
                    desc ={el.description}
                  />
                );
              })
     }
     </div>

    </div>


    











    <div className='flex flex-row mt-16  justify-center' >
    <hr className='mt-6 mr-3 md:w-96 h-1 bg-red-900' />
       <div className=' flex  '> 
       <h1 className='text-3xl  font-bold text-red-900 pr-2 ' >New </h1>
       <h1 className='text-3xl font-thin text-red-900 ' > Products </h1>
     </div>
     <hr className='mt-6 ml-3 md:w-96 h-1 bg-red-900' />
     </div>

       
     
    

     <div className='ml-3 gap-2 sm:w-9 md:w-[78rem] h-[19rem] md:relative left-16 flex flex-row mt-3  hover:cursor-pointer ' 
            ref={slideproduct}>
    



     <div className='  w-full sm:invisible md:visible mt-28 absolute  z-20 flex justify-between'>
     <div className='absolute  z-40 top-[1.2rem]  '>
     <button className='text-3xl font-bold bg-red-600 hover:bg-amber-400 rounded-md' onClick={privious} ><GrPrevious/></button>
     </div>

     <div className= ' absolute right-[0rem] top-[1.2rem] z-30'>
     <button className='text-3xl font-bold  bg-red-600 hover:bg-amber-400 rounded-md ' onClick={nextd}  ><GrNext /></button>
     </div>
     </div>
     {
      Best.map((el, index) => {
                return (
                  <Mycard
                     name={el.name}
                    catego={el.Product_name}
                    price={el.price}
                    image={el.img}
                    quant ={el.quantity}
                    discount = {el.discount}
                    desc ={el.description}
                  />
                );
              })
     }
     </div>



     

    {/* <div  className='relative w-full bottom-0 top-20 '>
       <Footer/>
       </div> */}


       <div className='sm:flex sm:flex-col md:flex md:flex-row md:h-[70vh] sm:h-[80vh] bg-[#f8ecd8] relative top-28 '>
       {/* <div>
        <img src={ad} alt='ad' className='w-96'/>
       </div> */}
      
       <div className=' sm:w-32 sm:h-36 md:w-auto md:h-96  md:ml-36 md:mt-4     '>
        <img src={ad2} alt='ad2'  className=' sm:w-32 sm:h-36  md:w-auto md:h-96  rounded-full  shadow-l' />   
       </div>

       {/*   */}
       <div className='sm:translate-y-10  md:translate-y-0  sm:absolute  md:absolute  md:right-72 md:top-20  '>
            <div className='     text-3xl absolute bottom-[16rem] left-9  font-bold  text-red-900'>
            <h1>About Us</h1>

            </div> 

            <div className=' sm:w-screen   md:w-96  pt-7'>
              <p className='text font-serif'>
              After serving so many customers, today we can proudly
               say that our shop, dummy company, situated at area, city, state, is home to a wide range of sweets that cater to the diverse taste buds of every patron. All of our delicacies are made using unique recipes that will leave a memorable aftertaste in your mouth. You can call for sweets in times of sudden sweet cravings or when you wish to complete a meal with a delightful dessert.
              </p>
            </div>
       </div>

{/*           
       <div>
        <img src={ad3} alt='ad3' className='w-auto h-96'/>
       </div> */}
       </div>
      


      {/* Contact */}



        <div className=' relative mt-72 justify-center  '>
        
           <div className=' flex text-3xl font-bold text-red-900  justify-center -translate-y-11   '>
           <h1>Contact us</h1>
           </div>  

           <div  className='md:flex gap-4'>
                <div className=' ml-9'>
                  <img src={mp} alt='mp' />
                 </div>

                 <div  className=' sm:ml-10 sm:mt-6 md:mt-5 md:ml-3 flex flex-col gap-4'>
                    <div>
                    <div className='flex gap-4'> 
                           <FaMapLocationDot className='text-2xl text-fuchsia-700 '  />
                           <h1 className='text-xl text-black'>our_shop</h1>
                          </div>
                        <div  className=' '> 
                           
                             <h4>6LSC, RSN Arcade, 6LSC, RSN Arcade, IP Extension,
                              Patparganj, near PRINCE APARTMENT, I.P.Extension, Patparganj, Delhi, 110092</h4>
                         </div>  
                      
                    </div>


                   <div>
                   <div className='flex gap-4'> 
                          <IoMdMailUnread className='text-2xl text-fuchsia-700 ' />
                           <h2>General Enquire</h2>

                          </div>
                        <div>

                     
                              <h4>Omsweet232gmail.com</h4>
                         </div>  
                      
                    </div>  


                    <div>
                    <div className='flex gap-4'> 
                       <IoCallOutline className='text-2xl text-fuchsia-700 ' />
                        <h1> Call Us</h1>
                       </div>

                       <div>

                      
                        <h3>+91-888888898</h3>
                       </div>

                    </div> 

                    <div>
                    <div className='flex gap-4'> 
                    <FaCalendarDays className='text-2xl text-fuchsia-700 ' />
                        <h1>Our Timing </h1>
                       </div>

                       <div>

                      
                        <h3>Mon - Son : 10:00 AM - 07:00 PM</h3>
                       </div>
                    </div>


                 </div>
           </div> 

            
          
       </div>

     <div  className=' md:ml-60   md:mr-24 mt-9  ' >
      <div className=' md:flex  gap-2     '>
       <div className='gap-3  flex flex-col'>
          <div className='p-2'>
             <input type='text'  placeholder='Full Name' className='appearance-none border border-gray-300 rounded-md h-11 md:w-[28rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-600'
               onChange={(e => setnm(e.target.value))}
             />
           </div>

           <div className='p-2'>
           <input type='text'  placeholder='Mobile Number'
          className='appearance-none border border-gray-300 rounded-md h-11 md:w-[28rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-600'
          onChange={(e => setpn(e.target.value))} />
           </div>

           <div className='p-2'>
           <input type='email'  placeholder='Email' 
          className='appearance-none border border-gray-300 rounded-md h-11 md:w-[28rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-600' 
          style={{ textAlign: 'start' }}
           
          onChange={(e => seteml(e.target.value))}
           />
           </div>

        </div>

        <div className='w-96 h-44 p-2'>
          <input type='text'  placeholder='Messege'
             className='appearance-none border border-gray-300 rounded-md h-[12rem] md:w-[28rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-600' 
             onChange={(e => setms(e.target.value))}

          />
        </div>
       </div>
      {/* bg-yellow-400 w-[8rem] text-lg font-normal text-slate-800  h-[2rem] rounded-2xl active:bg-yellow-600 */}
        <div className='md:ml-[25rem] mt-6 p-[2px] bg-red-900 w-32 rounded-md hover:scale-95' >
        <button className='md:text-xl text-white ml-6 ' onClick={pnt()}> Submit </button>  
        </div>

       </div>




       <div className='mt-32'>
        <Footer />
       </div>
    </div>
    
  )
}





























































































export default Home



