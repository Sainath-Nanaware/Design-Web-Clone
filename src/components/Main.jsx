import React from 'react'
import dashboard from '../../public/images/dashboard.png'
import logoGroup from '../../public/images/Mask Group.png'
import garnerLogo from '../../public/images/garnier.png'

import {Link} from 'react-router-dom'
function Main() {
  return (
    <main className=' '>
      {/* text area  */}
      <div className='h-[45vh] flex-col  justify-items-center gap-20 p-[48px]'>
              <p className=' w-[45vw] font-bold text-[44px]  text-center'>Solve problem with an integrated agency.</p>
              <p className=' my-4 w-[46vw] text-center'>Ehya is the Instagram analytics platform teams use to stay focused on the goals, track 
              engagement for report your business .</p>
      </div>
      {/* our profile and more info button  */}
      <div className=' h-[10vh]  flex justify-center items-center gap-4'>
        <button className='text-white bg-[#0075FF] p-[12px] px-[32px] rounded-bl-[40px] rounded-r-[20px]'>See our portfolio</button>
        <button className=' border-2 border-solid border-gray-300 text-blue-700 bg-[#ffff] p-[12px] px-[36px] rounded-bl-[40px] rounded-r-[20px] hover:bg-blue-500 hover:text-white'>More info</button>
      </div>
      {/* dashboard */}
      <div className=' flex justify-center items-center h-[98vh]'>
        <img src={dashboard} alt="dashboard image" className='   h-[80vh]' />
      </div>
      {/* Company logos */}
      <div className=' flex justify-center items-center gap-14 h-[28vh]'>
        <img src={logoGroup} alt="company logo" className='' />
        <img src={garnerLogo} alt="garner logo" className=''/>
      </div>
    </main>
  )
}

export default Main
