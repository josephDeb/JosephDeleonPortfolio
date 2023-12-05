import Joseph from "./Joseph"
import {Link} from 'react-scroll'

const Header = () => {

  return (
    <>
    <div className='max-w-screen-2xl mx-auto  h-[71px] bg-white/80 shadow-lg'>
       <div className='w-[88%] mx-auto flex items-center justify-between h-full'>
            <Link to='home'
                activeClass='active'
                spy={true} 
                className='text-[17px]
                '>Joseph.Dev</Link>

            <div className='gap-6 hidden xl:flex'>
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
            </div>
       </div>
    </div>

    <Joseph />
    </>
  )
}

export default Header