import { useState } from 'react'
import Sweet from './Componet/Sweet'
import Food from './Componet/Food'
import Choclates from './Componet/Choclates'
import Navbar from './Componet/Nav/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Componet/Home'
import Back from './Componet/Back'
import Header from './Componet/Header/Header'
import Login from './Componet/Login'
import Upload from './Componet/Upload'



// import ReactBootstrap from 'react-bootstrap';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Header />
    </div>
    <div>
    <Routes>
    <Route path='/' element ={<Home />} />
    <Route path='/sweet' element ={<Sweet />} />
    <Route path='/food' element ={<Food />} />
    <Route path='/chocolate' element ={<Choclates />} />
    <Route path='/back' element ={<Back />} />
    <Route path='/login' element ={<Login />} />
    <Route path='/upload' element ={<Upload />} />
   

    </Routes>
    </div>
    </>
  )
}

export default App
