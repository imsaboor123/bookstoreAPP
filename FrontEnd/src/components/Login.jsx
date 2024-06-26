import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';
import toast from 'react-hot-toast';
function Login() {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = async(data) => {
     const userinfo = {
      email: data.Email, // Use "Email" instead of "email" to match the registered name
      password: data.password,
  };
     await  axios.post("http://localhost:4000/user/login",userinfo)
     .then((res) => {
       console.log(res.data); // Log the response data
       if (res.data) {
           toast.success('Login: Successfully');
           document.getElementById("my_modal_5").close();
           window.location.reload();
       }
      localStorage.setItem("Users",JSON.stringify(res.data.user))
   })
   .catch((err) => {
       console.log(err);
      if(err.response){
        toast.error('This is an error!'+err.response.data.message);
      }
   });
  }
  return (
    <div>
<dialog id="my_modal_5" className="modal">
      <div className="modal-box mb-40 md:mb-0 ">
        <h2 className="text-2xl text-black font-bold mb-4">Login</h2>
        <div className="modal-action flex justify-center items-center">  
          <form  onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-gray-600">Email</label>
              <input type="email" {...register("Email", { required: true })} id="email"  placeholder='Enter Your Email' className="border text-zinc-900 rounded-md px-5 py-2" />
               {errors.email && <span className='text-red-500'>This field is required</span>}
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="password" className="text-gray-600">Password</label>
              <input type="password" {...register("password", { required: true })} id="password" placeholder='******' className="border text-zinc-900 rounded-md px-4 py-2" />
              {errors.password && <span className='text-red-500'>This field is required</span>}
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">Login</button>
             <a href='/singup' className='text-black ml-20'>SignUP</a>
          </form>
        </div>
        <form method="dialog" className='item-end flex justify-end'>
        {/* if there is a button in form, it will close the modal */}
        <button className="btn ">Close</button>
      </form>
      </div>
      
    </dialog>
    </div>
  )
}

export default Login
