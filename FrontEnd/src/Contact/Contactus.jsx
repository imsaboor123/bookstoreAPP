import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contactus() {

   

  return (
    <div className=' dark:bg-slate-900 dark:text-white'>
        <Navbar/>
        <div className=" dark:bg-slate-900 dark:text-white">
        <div className="container  dark:bg-slate-900 dark:text-white  mt-20 mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full px-16 py-16 md:w-1/2 md:ml-10 mb-8 md:mb-0">
          <div className="address-line mb-4">
            <img src="/image/marker.png" alt="Location" className="icon" />
            <div className="contact-info ml-4">
              <div className="contact-info-title text-blue-500 font-semibold">Address</div>
              <div>1002 West 5th Ave,</div>
              <div>Alaska, New York,</div>
              <div>55060.</div>
            </div>
          </div>
          <div className="address-line mb-4">
            <img src="/image/phone.png" alt="Phone" className="icon" />
            <div className="contact-info ml-4">
              <div className="contact-info-title text-blue-500 font-semibold">Phone</div>
              <div>12523-4566-8954-8956.</div>
            </div>
          </div>
          <div className="address-line mb-4">
            <img src="/image/mail.png" alt="Email" className="icon" />
            <div className="contact-info ml-4">
              <div className="contact-info-title text-blue-500 font-semibold">Email</div>
              <div>contactemail@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:ml-10">
          <div className="flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Form</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm text-gray-800 font-semibold mb-2">Your Name</label>
                  <input type="text" id="name" name="name" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm text-gray-800 font-semibold mb-2">Your Email</label>
                  <input type="email" id="email" name="email" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm text-gray-800 font-semibold mb-2">Message</label>
                  <textarea id="message" name="message" rows="4" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"></textarea>
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div></div> 
   <Footer/>
    </div>
  )
}

export default Contactus
