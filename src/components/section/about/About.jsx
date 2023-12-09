import { useContext, useState } from 'react'
import data from '../../data/Data'
import { Link, Outlet } from 'react-router-dom'
import origami from '../../../assets/origami.png'
import origami2 from '../../../assets/origami2.png'
import Welcome from '../../header/Welcome'
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
 <div id='about' className={`xl:flex xl:justify-center xl:items-center xl:flex-col  ${isOn ? "bg-black text-white" : "bg-white text-black"} xl:h-screen`}>
     <div className='w-full centered flex-col'>
        <div className=''>
            {isOn ? <img src={origami2} className='w-12'/> : <img src={origami} className='w-12'/>}
         </div>
         <h1 className='text-5xl font-bold'>About me</h1>
     </div>

    <div  className='max-w-screen-2xl grid grid-cols-2 py-8 mx-auto relative w-full h-full'>

      <div className='bg-red-200 w-full h-full centered'>
          <div className='bg-black w-[71%] h-[71%]'>

          </div>
      </div>

      <div className='bg-red-200 w-full h-full'>
asd
      </div>

   </div>
</div>
 </>
  )
}

export default About