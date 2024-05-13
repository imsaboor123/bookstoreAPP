import React from 'react'
import banner from '../../public/Banner.png';

function Banner() {
  return (
    
    <>
    <div className='max-w-screen-2xl dark:bg-slate-900 dark:text-white container mx-auto md:px-20 px-4'>
        <div className='flex flex-col md:flex-row'>
         <div className="Left order-2 md:order-1 w-full md:w-1/2 mt-10 md:mt-32 ">
            <div className=" space-y-10">
            <h1 className=' md:text-4xl text-xl font-bold'>Hallo, Welcome here to learn Something{""} <span className='text-pink-500'>new Everyday!!!</span></h1>
            <p className=' md:text-xl text-md'>Lorem adipisicing elit. Nostrum labore quia architecto consequuntur tempora? Exercitationem enim architecto quibusdam facilis numquam ex, consectetur error amet explicabo, eaque atque! Enim, minima quia.</p>
            <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
        </div> 
        <button className="btn btn-secondary mt-5   ">Secondary</button>   

        </div>
         <div className="Right mt-28 md:mt-10 order-1 w-full md:w-1/2 ">
            <img src={banner} alt="" />
         </div>
        </div>
    </div>
    </>
    
)
}

export default Banner
