import education from '../../../assets/education.png'
import data from '../../data/Data.js'
import {HiLocationMarker} from 'react-icons/hi'

const Educational = () => {
  console.log(data[1].educ)
  return (
    <div className='w-full '>
        <div className='w-full flex flex-col centered'>
        <h1 className=''>I am a Self-taught Programmer</h1>

        <p className='text-[14px] pt-2 text-gray-500 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ratione minus non corrupti amet consectetur.</p>
        </div>

        <div className='mt-8 centered gap-4'>
            <img src={education} className='w-12'/>
            <h4 className='text-red-500 text-2xl'>My Education</h4>
        </div>

        <div className='w-full mt-8 flex flex-col xl:grid  xl:grid-cols-2'>
              {data[1].educ.map((ed, i) => {
                return <div key={i} className='flex justify-between items-center gap-2 my-2'>
                    <div className='w-[62px] h-[53px] centered'>
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