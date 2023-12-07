import { useState } from 'react'
import data from '../../data/Data'
import { Link, Outlet } from 'react-router-dom'
import origami from '../../../assets/origami.png'
import Welcome from '../../header/Welcome'
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
 <>
  
  <Welcome />

 <div className='xl:flex xl:justify-center xl:items-center xl:flex-col xl:py-[170px] xl:pt-[80px]'>
    
    
    <div id='about' className='max-w-screen-2xl  flex flex-col py-8 mx-auto relative'>
     <div className='w-full centered '>
         <h1 className='text-5xl'>About me</h1>

         <div className='absolute -top-[28px]'>
            <img src={origami} className='w-12'/>
         </div>

     </div>
     
     <div className='w-[88%] mx-auto '>
         <div className='xl:w-[53%] mx-auto h-[71px] mt-5 flex justify-center items-center'>

         <Link to={'/'}  className=' h-[53px] bg-white w-full text-[14px] centered border hover:shadow-lg border-black transition-all duration-500 hover:bg-black hover:text-white'>PersonalInfo</Link>
         <Link to={'/educational'}  className=' h-[53px] bg-white w-full text-[14px] centered border hover:shadow-lg border-black transition-all duration-500 hover:bg-black hover:text-white'>Educational</Link>
         <Link to={'/skills'}  className='  h-[53px] bg-white w-full text-[14px] centered border hover:shadow-lg border-black transition-all duration-500 hover:bg-black hover:text-white'>Skills</Link>
         </div>
     </div>

     
     <div className='w-full  pt-5'>
             <Outlet />
     </div>
     </div>
</div>
 </>
  )
}

export default About