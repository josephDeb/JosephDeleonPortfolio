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
 <div id='about' className={`xl:flex xl:justify-center xl:items-center xl:flex-col  ${isOn ? "bg-black text-white" : "bg-white text-black"} xl:h-[710px] max-w-screen-2xl mx-auto`}>
     <div className='w-full centered flex-col gap-5'>
        <div className=''>
            {isOn ? <img src={origami2} className='w-12'/> : <img src={origami} className='w-12'/>}
         </div>
         <h1 className='text-4xl font-bold fnp'>About me</h1>
     </div>

    <div  className='max-w-screen-2xl grid grid-cols-1 xl:grid-cols-2 py-8 mx-auto relative w-full h-full'>

      <div className='w-full h-full centered'>
          <div className='bg-black w-[71%] h-[71%] centered'>
          </div>
      </div>

      <div className='w-full h-full xl:flex xl:items-center centered'>
         <div className='bg-black w-[71%] h-[71%]'>

         </div>
      </div>

   </div>
</div>
 </>
  )
}

export default About