import Darkmode from "./Darkmode"
import Joseph from "./Joseph"
import {Link} from 'react-scroll'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../context/GlobalContext'
const Header = () => { 

  const {isOn} = useContext(AppContext)

  return (
    <>
    <div className={`max-w-screen-2xl mx-auto  h-[71px] shadow-lg ${isOn ? "bg-black text-white transition-all duration-500" : "bg-white transition-all duration-500"}`}>
       <div className='w-[88%] mx-auto flex items-center justify-between h-full'>
           <div className="flex justify-center items-center ">

           <Link
                className='text-[17px]
                '>Joseph.Dev
          </Link>
           </div>

          

            <div className='gap-6 hidden xl:flex xl:justify-center xl:items-center'>
                <Link
                className='cursor-pointer '
                to='projects'
                activeClass='active'
                spy={true}
                >Projects</Link>
                <Link
                className='cursor-pointer '
                to='about'
                activeClass='active'
                spy={true}
                >About</Link>
                <Link
                className='cursor-pointer '
                to='contact'
                activeClass='active'
                spy={true}
                >Get in touch</Link>
                <Darkmode />
            </div>
       </div>
    </div>

    <Joseph />
    </>
  )
}

export default Header