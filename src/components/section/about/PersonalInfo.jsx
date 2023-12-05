import React from 'react'

import me from '../../../assets/boy.png'
import contact from '../../../assets/contact.png'
import gmail from '../../../assets/gmail.png'
import birthday from '../../../assets/happy-birthday.png'
import map from '../../../assets/map.png'

const PersonalInfo = () => {
  return (
    <div className='w-full centered flex-col text-center px-4'>
        <h1 className=''>I am a Full stack Developer</h1>

        <p className='text-[14px] pt-2 text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ratione minus non corrupti amet consectetur.</p>
        
        <div className='mt-8 centered gap-4'>
            <img src={me} className='w-12'/>
            <h4 className='text-red-500 text-2xl'>My Details</h4>
        </div>

        <div className='xl:w-[88%] xl:flex xl:flex-row gap-2 xl:mx-auto xl:centered mt-5 py-2 hidden centered'>
            <h1 className='border-r border-red-500 pr-2'>Name: Joseph louise C. De leon</h1>
            <h1 className='border-r border-red-500 pr-2'>Age: 19</h1>
            <h1 className='border-r border-red-500 pr-2'>Birthday: July 9 2004</h1>
            <h1 className='border-r border-red-500 pr-2'>Sex: Male</h1>
            <h1>Languages: English & Filipino</h1>
        </div>
        
        <div className='flex flex-col xl:grid xl:grid-cols-3 '>

        <div className='centered w-full flex-col mt-8 gap-2'>
        <h5 className='text-red-500 text-2xl'> Email</h5>
            <img src={gmail} className='w-12'/>
            <h4>Josephdeleonpogi@gmail.com</h4>
        </div>

        <div className='centered w-full flex-col mt-8 gap-2'>
        <h5 className='text-red-500 text-2xl'> Contact</h5>
            <img src={contact} className='w-12'/>
            <h4>09953936541</h4>
        </div>
        

        <div className='centered w-full flex-col mt-8 gap-2'>
        <h5 className='text-red-500 text-2xl'> Location</h5>
            <img src={map} className='w-12'/>
            <h4>#28 Nenita Interior Gulod Novaliches Quezon city</h4>
        </div>
    </div>
 </div>
  )
}

export default PersonalInfo