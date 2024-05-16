import React from 'react'
import Home from './Layout/Home'
import { Route, Routes } from "react-router-dom"
import Cources from './LayoutCources/Cources'
import Contactus from './Contact/Contactus'
import SingUP from './components/SingUP'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthPrviderContext';
import { Navigate } from 'react-router-dom';


function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser);
  
  return (
    <>
   <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/contact" element={<Contactus/>} />
     <Route path='/cource' element={authUser?<Cources/> :<Navigate to="/singup"/>} />
     <Route path='/singup' element={<SingUP/>} />
   </Routes>
  <Toaster/>
    </>
  )
}

export default App
