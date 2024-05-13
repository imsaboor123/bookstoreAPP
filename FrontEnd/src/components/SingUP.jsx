import React from 'react'
import { useForm } from 'react-hook-form'
const SingUP = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)
  return (
    <div className='bg-gray-100 flex justify-center items-center h-screen'>
<div class="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 class="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-4">
                <label for="name" class="block text-gray-700">Name</label>
                <input type="text"   id="name" name="name" class="form-input mt-1 py-2 rounded-md border-2 border-black block w-full" placeholder="Your Name"/>
            </div>
            <div class="mb-4">
                <label for="username" class="block text-gray-700">Username</label>
                <input type="text" id="username" {...register("username", { required: true })} name="username" class="form-input py-2 rounded-md mt-1 block w-full" placeholder="Your Username"/>
                {errors.username && <span className='text-red-500'>This field is required</span>}
            </div>
            <div class="mb-4">
                <label for="email" class="block text-gray-700">Email</label>
                <input type="email" id="email" name="email" {...register("email", { required: true })} class="form-input py-2 rounded-md mt-1 block w-full" placeholder="Your Email"/>
                {errors.email && <span className='text-red-500'>This field is required</span>}
            </div>
            <div class="mb-4">
                <label for="age" class="block text-gray-700">Age</label>
                <input type="number" id="age" name="age" {...register("age", { required: true })} class="form-input mt-1 py-2 rounded-md block w-full" placeholder="Your Age"/>
                {errors.age && <span className='text-red-500'>This field is required</span>}
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
