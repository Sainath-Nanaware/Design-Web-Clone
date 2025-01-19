import React from 'react'
function OurNewtworksCard({img,country,desc}) {
  return (
    <div className=' w-[18vw] h-[32vh] p-[12px] items-center rounded-[12px] bg-white'>
      <div className='flex justify-start items-center gap-3'> 
        <img src={img} alt="flag" className='h-[8vh] w-12 rounded-full object-fill ' />
        <p className='text-[18px] font-semibold'>{country}</p>
      </div>
      <p className='text-[#7C8F9E] mt-3 w-[14vw]'>{desc}</p>
    </div>
  )
}

export default OurNewtworksCard
