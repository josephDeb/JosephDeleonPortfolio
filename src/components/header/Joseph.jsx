import img from '../../assets/joseph28.jpg'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/java-script.png'
import react from '../../assets/react.png'
import nodejs from '../../assets/node-js.png'
import express from '../../assets/express.png'
import mongodb from '../../assets/mongodb.png'
import mysql from '../../assets/mysql.png'
const Joseph = () => {
  return (
    <div className='max-w-screen-2xl mt-8  xl:h-[80vh]'>
        
       <div className='w-[88%] mx-auto grid grid-cols-2 h-full '>
            <div className='w-full  h-full  flex flex-col pt-8'>
                <div className='flex flex-col'>
                   <h1 className='text-xl'>Hello i'm</h1>
                  <h4 className='text-5xl mb-3'>Joseph louise De leon</h4>
                   <h4 className='text-3xl'>Full stack Developer</h4>
                   <p className='text-[14px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ratione minus non corrupti, ipsum optio voluptate reprehenderit? Delectus ipsam doloribus fugit nostrum at.</p>
                </div>
                
                <div className='w-full h-[71px] flex justify-start items-center gap-3'>
                    <img src={html} className='w-[28px]'/>
                    <img src={css} className='w-[28px]'/>
                    <img src={js} className='w-[28px]'/>
                    <img src={react} className='w-[28px]'/>
                    <img src={nodejs} className='w-[71px]'/>
                    <img src={express} className='w-[71px]'/>
                    <img src={mongodb} className='w-[71px]'/>
                    <img src={mysql} className='w-[53px]'/>
                </div>

                <div className='flex gap-5 mt-5'>
                    <button className='w-[170px] border-2 py-2 bg-white border-black hover:bg-black hover:text-white transition-all duration-500'>Resume</button>
                    <button className='w-[170px] border-2 py-2 bg-white border-black hover:bg-black hover:text-white transition-all duration-300'>Contact me</button>
                </div>
            </div>

            <div className='w-full flex justify-center items-center border-2 h-full'>
                <div className='w-[71%] h-[71%] rounded-full bg-red-200'>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Joseph