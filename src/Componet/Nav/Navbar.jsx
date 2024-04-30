import React from 'react';
import './Navbar.css';
import { FaShoppingCart, FaUser} from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import logo from "../../assets/logo.jpeg"
import { Link } from 'react-router-dom';

const Navbar = () => { 
  return (
    <>
    <nav className='main-nav'>
      <div className='logo'>
        <img src={logo} alt="" style={{height:'2.5rem', width:'5rem', borderRadius:'5rem'}} />
      </div>
      <div className='search-items'>
          <input placeholder='Search items'  className='search-input'/>

          <div className='search-icon'><span><CiSearch/></span>
          </div>
      </div>
      <div className='menu-items'>
        <ul >
          <li >
            <Link to='/'>HOME</Link>
            {/* <h1>Home</h1> */}
          </li>
          <li>
            <Link to='/sweet' >SWEET</Link>

            {/* to="/sweet" */}
            {/* <h1>Sweet</h1> */}
          </li>
          <li>
            <Link to='/chocolate'>CHOCOLATES</Link>
            {/* <h1>CHOCOLATES</h1> */}
          </li>
          <li>
            <Link >BAKERIES</Link>
            {/* to="/bakeries" */}
            {/* <h1>BAKERIES</h1> */}
          </li>
          <li>
            <Link to='/food'>FOODS</Link>
            {/* to="/foods" */}
            {/* <h1>FOODS</h1> */}
          </li>
        </ul>
      </div>

      <div className='social-media'>
        <div className='desktop-icon'>
          <a href="https://www.w3schools.com/mysql/default.asp" target='w3school'><FaShoppingCart/></a>    
        </div>
        <div className='desktop-icon'>
             <a href="https://www.w3schools.com/mysql/default.asp" target='w3school'><FaUser/></a>
        </div> 
      </div>
    </nav> 
    </>
  )
}

export default Navbar