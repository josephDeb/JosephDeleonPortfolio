import React from 'react'
import joseph from '../../../assets/joseph28.jpg'
import me from '../../../assets/hacker.png'
import contact from '../../../assets/contact.png'
import gmail from '../../../assets/gmail.png'
import birthday from '../../../assets/happy-birthday.png'
import map from '../../../assets/map.png'

const PersonalInfo = () => {
  return (
    <div className='w-full centered flex-col text-center px-4 '>
    
    <div className='xl:flex mt-8 flex flex-col gap-8 xl:flex-row xl:gap-2'>
        <div className='xl:w-[350px]  centered'>
            <div className=''>
                <img src={joseph} className='w-[260px] rounded-full '/>
            </div>
        </div>

        <div className=' xl:w-[710px]'>
            <h1 className='px-5'>Hello, I'm Joseph Louise C. de Leon, a 19-year-old residing in Novaliches, Quezon City.
            I can code using MERN (MongoDB, Express.js, React, Node.js) stack and I am actively seeking an internship opportunity to further enhance my skills.
            </h1>

           <div className='grid xl:grid-cols-2 mt-14'>
           <div className='w-full mt-8 flex items-center  gap-5 '>
                <img src={me} className='w-12'/>
                <h1>Joseph louise C. de Leon</h1>
            </div>

            <div className='w-full mt-8 flex items-center  gap-5 '>
                <img src={gmail} className='w-12'/>
                <h1>josephdeleon08@gmail.com</h1>
            </div>

            <div className='w-full mt-8 flex items-center  gap-5 '>
                <img src={contact} className='w-12'/>
                <h1>09953936541</h1>
            </div>

            <div className='w-full mt-8 flex items-center gap-1 xl:gap-0'>
                <img src={map} className='w-12'/>
                <h1>#28 Nenita Interior Gulod Novaliches  Quezon city</h1>
            </div>
           </div>
        </div>
    </div>

 </div>
  )
}

export default PersonalInfo