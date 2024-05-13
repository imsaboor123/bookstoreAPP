import React from 'react'

function Card({item}) {
  return (
    <div className='mt-8 my-3 p-4'>
    <div className="card w-90 bg-base-100 border-2 border-white  dark:bg-slate-900 dark:text-white shadow-xl hover:scale-105 duration-200  ">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
       {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <p className='badge badge-info p-4' >Price ${item.price}</p>

    <div className="card-actions justify-end">
      <div className="badge bottom-1 border-secondary hover:badge-secondary p-5">Buy Now</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card
