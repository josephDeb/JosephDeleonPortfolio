import React from 'react'
import email from '../../../assets/email.png'

const Contact = () => {
  return (
    <div id='contact' className='w-full h-screen centered pb-44'>
        <div className='w-[80%] flex flex-col xl:flex-row'>
            <div className='h-[350px] w-full xl:centered xl:w-full xl:h-[440px]'>
                <img src={email} className='object-cover xl:object-contain xl:h-[440px] xl:w-full'/>
            </div>

            <div className='flex flex-col w-full centered'>
                <h1 className='text-5xl'>Contact</h1>

                <div className='flex flex-col xl:w-[71%]  mt-8'>
                    <label>Full name :</label>
                    <input className='h-[35px] border-2 border-black'></input>
                </div>
                <div className='flex flex-col xl:w-[71%]  mt-5 '>
                    <label>Email :</label>
                    <input className='h-[35px] border-2 border-black'></input>
                </div>

                <textarea className='border-2 border-black mt-5 h-[88px] xl:w-[71%]'>

                </textarea>
                <div className='flex flex-col xl:w-full  mt-5 w-full'>
                    <button className='w-full bg-black text-white py-3 xl:w-[80%] xl:mx-auto'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact