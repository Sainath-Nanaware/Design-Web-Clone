import React from 'react'
import shoppingBag  from "../../public/images/shopping-bag.svg";

function SattisticsCard({img, num, title, desc}) {
  return (
    <div className='w-[16vw] h-[34vh] flex flex-grow flex-col justify-center items-center  gap-2'>
        <img src={img} alt="" className='border border-solid border-gray-300 rounded-lg '/>
        <p className=' font-bold text-4xl'>{num}</p>
        <p className='font-bold'>{title}</p>
        <p className='text-center text-[#7D82A1]'>{desc}</p>
    </div>
  )
}

export default SattisticsCard
