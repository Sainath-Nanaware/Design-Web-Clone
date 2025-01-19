import React from 'react'
import map from '../../public/images/map.png'
import OurNewtworksCard from './OurNewtworksCard'
import bagladeshFlag from '../../public/images/bangladeshFlag-icon.jpg'
import unitedState from '../../public/images/unitedState.webp'
import australia from '../../public/images/Australia.png'
import china from '../../public/images/Flag-China.webp'


const OurNetworkData=[
    {
        img:bagladeshFlag,
        country:'Bangladesh',
        desc:"Event madness gathering innoies, & tech enthusiasts in Speced."
    },
    {
        img:unitedState,
        country:'United States',
        desc:"Event madness gathering innoies, & tech enthusiasts in Speced."
    },
    {
        img:australia,
        country:'Australia',
        desc:"Event madness gathering innoies, & tech enthusiasts in Speced."
    },
    {
        img:china,
        country:'China',
        desc:"Event madness gathering innoies, & tech enthusiasts in Speced."
    }
]

function OurNetwork() {
  return (
    <div className=' px-[110px] h-[166vh] w-[100%] mt-10'>
        <div className='h-[100%] w-[100%]  bg-[#E2F3F9]'>
            {/* title */}
            <div className='h-[30vh] w-[100%]  flex justify-center items-center '>
                <p className='w-[22vw] text-center font-bold text-[26px]'>Our network & world 
                        work details.</p>
            </div>
            {/* map */}
            <div className='flex justify-center'>
                <img src={map} alt="map image" className='h-[98vh] '/>
            </div>
            {/* cards */}
            <div className=' px-[42px] flex gap-5'>
                {OurNetworkData.map((element,index)=>{
                    return <OurNewtworksCard key={index} img={element.img} country={element.country} desc={element.desc}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default OurNetwork
