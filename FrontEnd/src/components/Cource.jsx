import React, { useEffect, useState } from 'react'
import Card from './Card';
import axios from 'axios';

function Cource() {
    
    const [book,setBook]=useState([])
    useEffect(() => {
      const getBook = async ()=>{
        try {
          const res = await axios.get("http://localhost:4000/book");
          console.log(res.data)
          setBook(res.data);
        } catch (error) {
          console.log(error)
        }

      };
      getBook();
      
    }, [])
     const paidData = book.filter((data)=> data.category === "Paid");
    
    
        
  return (
    <>
     <div className="max-w-screen-2xl mt-32  dark:bg-slate-900 dark:text-white  container mx-auto md:px-15 px-4">
     <div className="justify-center items-center text-center">
     <h1 className="md:text-4xl font-bold">
        We're Delighted to have you 
       <span className=" text-secondary md:text-4xl"> Here! :)</span>
     </h1>
     <p className=' md:mt-10 m-4 text-1md tracking-tighter'>Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, iusto? dolor sit amet consectetur adipisicing elit. Et consequatur minus tempora repudiandae rerum dolorem maxime magni quas a laborum iusto saepe, velit labore, vitae beatae dolores reprehenderit inventore minima illum ipsa laudantium provident excepturi! Et libero minima qui possimus.</p>
      <button  className='btn mt-5 btn-secondary'><a href="/">Back</a></button>
     </div>
     <div className=' grid grid-cols-1 md:grid-cols-4'>
     {paidData.map((item)=>{
       return <Card key={item.id} item={item}/>
     })}
     </div>

     </div>
    </>
  )
}

export default Cource
