import React from 'react'
import { useAuth } from '../Context/AuthPrviderContext';
import User from '../../../BackEnd/modal/user.modal';
import toast from 'react-hot-toast';

function Logout() {
    
    const [authUser,setAuthUser]=useAuth();
    const handleLogout =()=>{
        try {
           setAuthUser({
            ...authUser,
            user:null,
           })
           localStorage.removeItem("Users")
           toast.success("Logout Success");
           window.location.reload()
        } catch (error) {
            toast.error("Error"+error.message)
        }
    }
    
  return (
    <div>
      <button className='btn px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
