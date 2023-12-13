import { useContext, useState } from 'react'
import data from '../../data/Data'
import { Link, Outlet } from 'react-router-dom'
import origami from '../../../assets/origami.png'
import origami2 from '../../../assets/origami2.png'
import joseph from '../../../assets/joseph28.jpg'
import { AppContext } from '../../../context/GlobalContext'
const About = () => {

  const [datas, setDatas] = useState(data)
  console.log(datas)

    const category = data


    console.log(category)
  const filterItems = (cat) => {
    const newItems = data.filter((newVal) => newVal.category === cat)
    setDatas(newItems)
  }

  const {isOn} = useContext(AppContext)

  return (
 <>
 <div id='about' className={`xl:flex xl:justify-center xl:items-center xl:flex-col  ${isOn ? "bg-black text-white" : "bg-white text-black"} xl:h-[710px] max-w-screen-2xl mx-auto xl:py-5 h-[1070px] pb-[88px]`}>
     <div className='w-full centered flex-col gap-5 xl:w-full'>

         <div className='flex justify-start items-center w-[88%] gap-5 mx-auto'>
           <h1 className='text-4xl font-bold fnp'>About me</h1> 
           <div className='border-2 w-[80%] mx-auto'></div>
         </div>
     </div>

    <div  className='max-w-screen-2xl grid grid-cols-1 xl:grid-cols-2 py-8 mx-auto relative w-full h-full '>

      <div className='w-full h-full centered'>
          <div className=' w-[71%] h-[71%] gap-5 prg centered flex-col xl:text-gray-500 hover:text-white transition-all duration-500'>
              <h1>I am a passionate and self-taught Full-Stack Developer residing in Novaliches, Quezon city. At the age of 19, I have dedicated myself to the exciting world of web development and have embarked on a journey of constant learning and growth.</h1>

              <h2>Now  i am actively seeking an internship opportunity to further enhance my skills.</h2>

              <h4>My mission as a developer is simple yet powerful: to bring your vision to life. Your succes is my succes, and i'm commited to delivering result exceed your expectations.</h4>

              <h5> I made a video journey from how i start from HTML/CSS to MERN stack. This video will show all my projects that i build from scratch. full video link. <a>www.example.com/josephdeleon</a></h5>
          </div>
      </div>

      
      <div className='w-full h-full xl:flex xl:items-center centered'>
         <div className={`${isOn ? "bg-white": "bg-black"} w-[350px] rounded-full h-[350px]`}>

         </div>
      </div>
   </div>
</div>
 </>
  )
}

export default About