import React from 'react'
import clayMakup from '../../public/images/clay-mockup 1.png'
import WhyWeBestCards from './WhyWeBestCards'

const WhyWeBestCardData=[
    {
        title:'Quality',
        desc:'Follow a hashtag growth total posts, videos and images.more revitions'
    },
    {
        title:'Communication',
        desc:'Follow a hashtag growth total posts, videos and images.more revitions'
    },
    {
        title:'Reliability',
        desc:'Follow a hashtag growth total posts, videos and images.more revitions'
    }
]
function WhyWeBest() {
  return (
     <div className='px-[110px] pl-[15vw] flex primary-border h-[80vh] relative'>
        <div className='primary-border  w-[35%] h-[100%] rounded-[20px] bg-[#FFA31833]'>
                <img src={clayMakup} alt="laptop image"  className='h-[68vh] absolute z-1 top-10 left-0'/>
        </div>
        <div className='px-[40px] flex flex-col justify-center items-start primary-border w-[75%] h-[100%] gap-3'>
                <div className='primary-border h-[25vh] w-[100%]'>
                    <p className='font-bold text-[40px]'>Why we best ?</p>
                    <p className='text-[#7D82A1]'>Don’t waste time on search manual tasks. Let Automation do it for you. Simplify workflows, reduce errors, and save time.</p>
                </div>
                <div className='primary-border h-[45vh] w-[100%] p-[10px]'>
                    {WhyWeBestCardData.map((element,index)=>{
                        return <WhyWeBestCards key={index} title={element.title} desc={element.desc}/>
                    })}
                    
                    
                    



                </div>
        </div>
      </div>
    
  )
}

export default WhyWeBest
