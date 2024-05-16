import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast';
const SingUP = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = async(data) => {
     const userinfo =   {
        fullname:data.fullname,
        email:data.email,
        password:data.password,
 
    }
  await  axios.post("http://localhost:4000/user/signup",userinfo)
  .then((res) => {
    console.log(res.data); // Log the response data
    if (res.data) {
        toast.success("SignUP Successfull");
    }
    localStorage.setItem("Users",JSON.stringify(res.data.user))
})
.catch((err) => {
    console.log(err);
    if (err.response && err.response.status === 400) {
        toast.error("User is already registered");
    } else {
        toast.error("Error: " + err.response.data.message);
    }
});
      }
  return (
    <div className='bg-gray-100 flex justify-center items-center h-screen'>
<div class="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 class="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-4">
                <label for="username" class="block text-gray-700">Username</label>
                <input type="text" id="username" {...register("fullname", { required: true })} name="fullname" class="form-input py-2 rounded-md mt-1 block w-full" placeholder="Enter Your Fullname"/>
                {errors.fullname && <span className='text-red-500'>This field is required</span>}
            </div>
            <div class="mb-4">
                <label for="email" class="block text-gray-700">Email</label>
                <input type="email" id="email" name="email" {...register("email", { required: true })} class="form-input py-2 rounded-md mt-1 block w-full" placeholder="Your Email"/>
                {errors.email && <span className='text-red-500'>This field is required</span>}
            </div>
            <div class="mb-4">
                <label for="password" class="block text-gray-700">Password</label>
                <input type="password" id="password" {...register("password", { required: true })} name="password" class="form-input py-2 rounded-md mt-1 block w-full" placeholder="Your Password"/>
                {errors.password && <span className='text-red-500'>This field is required</span>}
            </div>
            <div class="text-center">
                <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Sign Up</button>
                <p className="text-gray-600 text-sm mt-2">Already have an account? <a href="/" className="text-blue-500">Login</a></p>
            </div>
        </form>
    </div>
    </div>
  )
}

export default SingUP
