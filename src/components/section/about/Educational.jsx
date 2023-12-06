import education from '../../../assets/education.png'
import data from '../../data/Data.js'
import {HiLocationMarker} from 'react-icons/hi'

const Educational = () => {
  console.log(data[1].educ)
  return (
    <div className='w-full xl:pb-[80px]'>

        <div className='w-full mt-8 flex flex-col xl:grid  xl:grid-cols-2 xl:w-[88%] xl:mx-auto'>
              {data[1].educ.map((ed, i) => {
                return <div key={i} className='flex justify-between items-center gap-2 my-2'>
                    <div className='w-[62px] h-[53px] centered '>
                        <HiLocationMarker className='text-3xl text-red-500 cursor-pointer'/>
                    </div>
                    <div className='w-full flex flex-col '>
                      <h1 className='w-full underline cursor-pointer'>{ed.schoolName}</h1>
                      <h2 className='text-[12px]'>{ed.location}</h2>
                      <div className='flex mt-1 gap-1 text-red-500'>
                          <h3>{ed.level}</h3>
                          <h3>{ed.year}</h3>
                      </div>
                    </div>
                </div>
              })}
        </div>
    </div>
  )
}

export default Educational