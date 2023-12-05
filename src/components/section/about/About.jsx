import { useState } from 'react'
import data from '../../data/Data'
import { Link, Outlet } from 'react-router-dom'

const About = () => {

  const [datas, setDatas] = useState(data)
  console.log(datas)

    const category = data


    console.log(category)
  const filterItems = (cat) => {
    const newItems = data.filter((newVal) => newVal.category === cat)
    setDatas(newItems)
  }

  return (
    <div className='max-w-screen-2xl xl:h-screen h-[120vh]  flex flex-col '>
        <div className='w-full centered '>
            <h1 className='text-5xl'>About me</h1>
        </div>
        
        <div className='w-[88%] mx-auto '>
            <div className='xl:w-[53%] mx-auto h-[71px] mt-5 FSC'>
   
            <Link to={'/personalinfo'}  className=' h-[53px] w-full text-[14px] centered border hover:shadow-lg border-black transition-all duration-500 hover:bg-black hover:text-white'>PersonalInfo</Link>
            <Link to={'/educational'}  className=' h-[53px] w-full text-[14px] centered border hover:shadow-lg border-black transition-all duration-500 hover:bg-black hover:text-white'>Educational</Link>
            <Link to={'/skills'}  className='  h-[53px] w-full text-[14px] centered border hover:shadow-lg border-black transition-all duration-500 hover:bg-black hover:text-white'>Skills</Link>
            </div>

            <div className='w-full   pt-5'>
                <Outlet />
            </div>

            <div className='h-32'>

            </div>
        </div>
    </div>
  )
}

export default About