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

        <div className='flex flex-col xl:grid xl:grid-cols-3 '>
        <div className='centered w-full flex-col mt-8 gap-2'>
            <h5 className='text-red-500 text-2xl'>My details</h5>
            <img src={me} className='w-12'/>
            <h4>Joseph louise C. De leon</h4>
            <div className='flex flex-col '>
                <p>Birthday : July 9 2004</p>
                <div className='flex w-full centered gap-3'>
                <p>Age : 19</p>
                <p>Sex : Male</p>
                </div>
                <p>Language: English & Tagalog</p>
            </div>
        </div>

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