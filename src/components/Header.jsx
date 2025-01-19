import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../public/images/logo.svg'
function Header() {
  return (
    <header className='px-[110px] py-[14px] flex items-center gap-[8vw] primary-border'>
        <div className=''>
            <Link ><img src={logo} alt="logo image" /></Link>
        </div>
        <div className=''>
            <ul className='flex items-center justify-center gap-9'>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Project</li>
                <li>Help</li>
            </ul>
        </div>
        <div className=' flex justify-center items-center gap-[20px] primary-border h-[10vh] w-[20vw]'>
            
            <Link><button className='text-blue-500'>sign in</button></Link>
            <Link><button className='text-blue-500 bg-[#DAEBFF] p-[12px] px-[36px] rounded-bl-[40px] rounded-r-[20px]'>sign up</button></Link>

        </div>

    </header>      
  )
}

export default Header
