import React from 'react'

function WhyWeBestCards({title,desc}) {
  return (
    <div className='w-[28vw] flex gap-3 mt-3'>
        <div className=''>
            <p className='p-[2px] bg-[#4DD58F40]  text-green-700 rounded-full text-center'>&#10004;</p>
        </div>
        <div className=''>
            <p className='font-bold text-[16px]'>{title}</p>
            <p className='text-[#8EA9C1]'>{desc}</p>
        </div>
    </div>
  )
}

export default WhyWeBestCards
