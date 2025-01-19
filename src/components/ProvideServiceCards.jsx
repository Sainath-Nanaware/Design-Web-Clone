import React from 'react'

function ProvideServiceCards({img,title, desc}) {
  return (
    <div className=' primary-border p-[22px] bg-white w-[12vw] h-[28vh] rounded-[15px] flex flex-grow flex-col justify-center items-start  gap-2'>
        <img src={img} alt="" className='border border-solid border-gray-300 rounded-lg '/>
        <p className='font-bold'>{title}</p>
        <p className='text-start text-[#7D82A1]'>{desc}</p>
    </div>
  )
}

export default ProvideServiceCards
