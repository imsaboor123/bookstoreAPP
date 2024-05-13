import React from 'react'
import Navbar from '../components/Navbar'
import Cource from '../components/Cource'
import Footer from '../components/Footer'


function Cources() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Navbar/>
    <div className="">
    <Cource/>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Cources
