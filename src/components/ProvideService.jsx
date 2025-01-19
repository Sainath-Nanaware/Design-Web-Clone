import React from 'react'
// className='primary-border'
import marketting from '../../public/images/marketting.svg'
import graphicsDesign from '../../public/images/graphic-design.svg'
import heaking from '../../public/images/heaking.svg'
import uiUx from '../../public/images/ui-ux.svg'
import ProvideServiceCards from './ProvideServiceCards'


const ProvideServiceData=[
    {
    imgSvg: marketting,
    title: "Marketing",
    desc: "Follow a hashtag total posts, videos",   
    },
    {
    imgSvg: graphicsDesign,
    title: "Graphic design",
    desc: "Follow a hashtag total posts, videos",   
    },
    {
    imgSvg: heaking,
    title: "Heaking",
    desc: "Follow a hashtag total posts, videos",   
    },
    {
    imgSvg: uiUx,
    title: "UI/UX design",
    desc: "Follow a hashtag total posts, videos",   
    }
]

function ProvideService() {
  return (
    <div className='px-[110px] flex primary-border h-[80vh] relative'>
        {/* left text div */}
      <div className='px-[60px] flex flex-col justify-center items-start primary-border w-[65%] h-[100%] gap-3'>
        <p className=' primary-border text-[38px] w-[28vw] font-bold '>We provide that service.</p>
        <p className='text-[#7D82A1]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
        <p className='text-[#0075FF] text-[18px]'>Learn more &rarr;</p>
      </div>
      {/* right cards div */}
      <div className='primary-border w-[45%] h-[100%] rounded-[20px] bg-[#2FB8E333]'>
           <div className='flex flex-wrap gap-6 p-[32px] absolute z-1  top-7 right-24 w-[40vw]'>
           {ProvideServiceData.map((element,index)=>{
                return <ProvideServiceCards key={index} img={element.imgSvg} title={element.title} desc={element.desc}/>
           })}
           </div>
           
      </div>
    </div>
  )
}

export default ProvideService
