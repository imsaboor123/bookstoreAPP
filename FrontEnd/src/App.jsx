import React from 'react'
import Home from './Layout/Home'
import { Route, Routes } from "react-router-dom"
import Cources from './LayoutCources/Cources'
import Contactus from './Contact/Contactus'
import SingUP from './components/SingUP'



function App() {
  
  return (
    <>
   <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/cource" element={<Cources/>} />
     <Route path='/contact' element={<Contactus/>} />
     <Route path='/singup' element={<SingUP/>} />
   </Routes>
    </>
  )
}

export default App
